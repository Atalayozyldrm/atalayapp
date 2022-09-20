import express from "express";
import router from "./router/router.js";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import "./config/passport.js";
import connectDb from "./helpers/connectDb.js";
import config from "./config/config.js";
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
  windowMs: 60 * 60 * 60 * 10000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Çok fazla istekte bulundun , biraz bekletelim seni 🤔",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDb();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(limiter);
// app.use(express.static(path.join(__dirname, "/build")));
app.use(cookieParser());
app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Set-Cookie", "HttpOnly;Secure;SameSite=None");
  next();
});
app.use(
  session({
    secret: config.sessionSecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: MongoDBStore({
      uri: "mongodb+srv://admin:19031903@atalayozy.swolt.mongodb.net/?retryWrites=true&w=majority",
      collection: "sessions",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(csrf({ cookie: true }));

// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "build", "../../build/index.html"));
// });

app.use("/api", router);

app.listen(process.env.PORT || 5500, () =>
  console.log("Started run server. 5500 port 🚀🚀🚀🚀🚀")
);
