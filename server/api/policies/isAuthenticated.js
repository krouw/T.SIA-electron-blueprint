/**
 * isAuthenticated
 * @description :: Policy to inject user in req via JSON Web Token
 */
var passport = require('passport');

module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (error, admin, info) {
      if (error) return res.serverError(error);
      if (!admin)
       return res.unauthorized(null, info && info.code, info && info.message);
     req.admin = admin;

     next();
    })(req, res);
};
