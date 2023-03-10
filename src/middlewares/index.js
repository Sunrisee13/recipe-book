import { Favourite } from "../../db/models";

export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

export const checkUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const entry = await Favourite.findByPk(id);

    if (entry.user_id === req.session.user.id) {
      return next();
    }
    return res.sendStatus(401);
  } catch (e) {
    res.sendStatus(500);
  }
};
