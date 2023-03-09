import express from "express";
import { Favourite } from "../../db/models";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const initState = { recipes: (await Favourite.findAll()).dataValues };
    // Рецепты будем вытягивать по юзеру, который зашёл
    console.log(initState);
    res.render("Layout", initState);
  })
  .put(async (req, res) => {
    console.log(await Favourite.create(req.body));
    res.sendStatus(200);
  });

export default router;
