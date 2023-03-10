import express from "express";
import { Favourite } from "../../db/models";
import { checkUser } from "../middlewares";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const initState = {
        recipes: (
          await Favourite.findAll({ where: { user_id: req.session.user.id } })
        ).map((el) => el.dataValues),
      };
      res.render("Layout", initState);
    } catch (e) {
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    try {
      await Favourite.create({ ...req.body, user_id: req.session.user.id });
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const newRecipe = await Favourite.findOne({
        where: { user_id: req.session.user.id },
      });
      newRecipe.name = req.body.name;
      newRecipe.ingredients = req.body.ingredients;
      newRecipe.time = req.body.time;
      newRecipe.save();
      res.json(newRecipe);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

router.delete("/:id", checkUser, async (req, res) => {
  const { id } = req.params;
  try {
    await Favourite.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
