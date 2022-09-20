const acsess = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
};

export default acsess;
