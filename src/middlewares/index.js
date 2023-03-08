export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  console.log("in path");
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

// export const checkUser = async (req, res, next) => {
//   const { id } = req.params;
//   const entry = await Entry.findByPk(id);

//   if (entry.user_id === req.session.user.id) {
//     return next();
//   }
//   return res.sendStatus(401);
// };
