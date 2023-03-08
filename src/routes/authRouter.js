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
  .post((req, res) => {
    console.log(req.body);
    res.sendStatus(200);
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
      console.log(login, email, password);
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { login, password: await bcrypt.hash(password, 5) },
      });
      console.log(user);
      console.log(created);
      if (!created)
        return res
          .status(403)
          .json({ message: "Пользователь с таким email уже существует" });

      req.session.user = { id: user.id, name: user.name };
      return res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

export default router;
