import express from "express";
import router from "./router/router.js";
import passport from "passport";
import "./config/passport.js";
import connectDb from "./helpers/connectDb.js";
import { default as connectMongoDBSession } from "connect-mongodb-session";
import cors from "cors";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import session from "express-session";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
const app = express();

const MongoDBStore = connectMongoDBSession(session);

const limiter = rateLimit({
  windowMs: 60 * 60 * 60 * 10000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Çok fazla istekte bulundun , biraz bekletelim seni 🤔",
});

app.set("trust proxy", true);
connectDb();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(limiter);

app.use(cookieParser());

app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));
app.use(
  cors({
    origin: "*",
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

app.use(
  session({
    secret: "sen beni bu deli kadından kurtar tanrım",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false,
    },
    resave: true,
    saveUninitialized: false,
    store: MongoDBStore({
      uri: "mongodb+srv://admin:19031903@atalayozy.swolt.mongodb.net/?retryWrites=true&w=majority",
      collection: "sessions",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.send("aramzda bir sürü şeytan ");
});
app.use(csrf({ cookie: true }));

app.use("/api", router);

app.listen(process.env.PORT || 8080, () => console.log("Run"));
