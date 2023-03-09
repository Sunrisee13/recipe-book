import express from "express";
import { Favourite } from "../../db/models";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const initState = {
      recipes: (
        await Favourite.findAll({ where: { user_id: req.session.user.id } })
      ).map((el) => el.dataValues),
    };
    // console.log(await Favourite.findAll());
    console.log(initState.recipes);
    // Рецепты будем вытягивать по юзеру, который зашёл
    res.render("Layout", initState);
  })
  .put(async (req, res) => {
    console.log(
      await Favourite.create({ ...req.body, user_id: req.session.user.id })
    );
    res.sendStatus(200);
  });

export default router;
