import express from "express";
import morgan from "morgan";
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

app.engine("jsx", jsxRender);
app.set("view engine", "jsx");
app.set("views", path.join(__dirname, "components"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const FileStore = store(session);

const sessionConfig = {
  name: "user_sid", // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: "beavers forever", // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
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
