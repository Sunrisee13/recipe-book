import express from "express";
import morgan from "morgan";
import path from "path";
import jsxRender from "./utils/jsxRender";
import indexRouter from "./routes/index";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.engine("jsx", jsxRender);
app.set("view engine", "jsx");
app.set("views", path.join(__dirname, "components"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
