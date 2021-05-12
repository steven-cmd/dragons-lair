module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send("log in fool");
    }
    next();
  },
  adminsOnly: (req, res, next) => {
    if (!req.session.user.isAdmin) {
      return res.status(403).send("you are a fool not an admin");
    }
    next();
  },
};
