import express from "express";
import { Server } from "socket.io";
import router from "./router/router.js";
import connectDb from "./helpers/connectDb.js";
import cors from "cors";
import csrf from "csurf";
import cookieParser, { signedCookie } from "cookie-parser";
import morgan from "morgan";
import { initializeApp } from "firebase-admin/app";
import session from "express-session";

const app = express();
const io = new Server(5000, { cors: { origin: "http://localhost:3000" } });

connectDb();

// socket proccsess
io.on("connection", (socket) => {
  console.log("Biri bağlandı 🚀🚀");
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(csrf({ cookie: true }));
app.use(function(req, res, next) {
  const token = req.csrfToken();
  res.cookie("X-Csrf-Token", token);
  res.locals.csrfToken = token;
  next();
});
app.use("/api", router);

app.listen(5500, () => console.log("Started run server. 5500 port 🚀🚀🚀🚀🚀"));
