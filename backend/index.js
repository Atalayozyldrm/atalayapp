import express from "express";
import router from "./router/router.js";
import passport from "passport";
import "./config/passport.js";
import connectDb from "./helpers/connectDb.js";
import config from "./config/config.js";
import { default as connectMongoDBSession } from "connect-mongodb-session";
import cors from "cors";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import address from "address";
import geo from "geoip-lite";
import morgan from "morgan";
import session from "express-session";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import expressAsyncHandler from "express-async-handler";

const app = express();
const MongoDBStore = connectMongoDBSession(session);

const limiter = rateLimit({
  windowMs: 60 * 60 * 60 * 10000,
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Çok fazla istekte bulundun , biraz bekletelim seni 🤔",
});

connectDb();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.set("trust proxy", true);
app.use(limiter);

app.use(cookieParser());

app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));

app.use(
  cors({
    origin: "https://atalay.netlify.app",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    preflightContinue: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use((req, res, next) => {
  res.header("Set-Cookie", "HttpOnly;Secure;SameSite=None");
  next();
});

app.use(
  session({
    secret: config.sessionSecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false,
    },
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: true,
      signed: true,
    },
    store: MongoDBStore({
      uri: "mongodb+srv://admin:19031903@atalayozy.swolt.mongodb.net/?retryWrites=true&w=majority",
      collection: "sessions",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(csrf({ cookie: false }));

app.get(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const ip = await address.ip();
    const data = await geo.lookup(ip);
    const a = JSON.stringify(data);
    return res
      .status(418)
      .send(
        "<center style='font-size:36px;'>Evine piza yollayımi lan oççç</center>" +
          a
      );
  })
);

app.use("/api", router);

app.listen(process.env.PORT || 5500, () =>
  console.log("Started run server. 5500 port 🚀🚀🚀🚀🚀")
);
