import express from "express";
import path from "path";
import session from "express-session";
import store from "session-file-store";
import jsxRender from "./utils/jsxRender";
import indexRouter from "./routes/indexRouter";
import favouriteRouter from "./routes/favouriteRouter";
import authRouter from "./routes/authRouter";
import regRouter from "./routes/regRouter";
import { authMiddleware, pathMiddleware } from "./middlewares";

require("dotenv").config();

const app = express();
const PORT = 3000;

app.engine("js", jsxRender);
app.set("view engine", "js");
app.set("views", path.join(__dirname, "components"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const FileStore = store(session);

const sessionConfig = {
  name: "user_sid",
  secret: "beavers forever",
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(pathMiddleware);
app.use(authMiddleware);

app.use("/", indexRouter);
app.use("/favourite", favouriteRouter);
app.use("/auth", authRouter);
app.use("/reg", regRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
