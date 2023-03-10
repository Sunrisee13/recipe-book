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
  })
  .patch(async (req, res) => {
    try {
      // const { id } = req.params;
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
router.delete("/:id", async (req, res) => {
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
