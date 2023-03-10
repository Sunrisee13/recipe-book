import express from "express";
import { User } from "../../db/models";
import bcrypt from "bcrypt";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const initState = {};
    res.render("Layout", initState);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password)
      return res.status(400).json({ message: "Не должно быть пустых полей" });
    try {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.user = { id: user.id, login: user.login };

        return res.sendStatus(200);
      }
      return res.status(401).json({ message: "Проверьте введенные данные" });
    } catch (err) {
      return res.status(500).json({ message: "Непредвиденная ошибка" });
    }
  });

router
  .route("/reg")
  .get((req, res) => {
    const initState = {};
    res.render("Layout", initState);
  })
  .post(async (req, res) => {
    try {
      const { email, login, password } = req.body;
      if (!(login && email && password))
        return res.status(400).json({ message: "Не должно быть пустых полей" });
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { login, password: await bcrypt.hash(password, 5) },
      });
      if (!created)
        return res
          .status(403)
          .json({ message: "Пользователь с таким email уже существует" });

      req.session.user = { id: user.id, login: user.login };
      return res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.post("/logout", (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  req.session.destroy();
  res.clearCookie("user_sid").redirect("/").sendStatus(200);
});
export default router;
