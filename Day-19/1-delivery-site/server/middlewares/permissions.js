function allowedUsers(allowedRoles) {
  return (req, res, next) => {
    if (!req.userId || !allowedRoles.includes(req.userType)) {
      return res.json({ msg: "Access Denied" });
    }
    next();
  };
}

module.exports = allowedUsers;
