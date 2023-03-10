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

export default router;
