/**
 * Passport configuration file where you should configure strategies
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;

//var EXPIRES_IN_MINUTES = 60 * 24;
var SECRET = process.env.tokenSecret || "4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM";
var ALGORITHM = "HS256";
var ISSUER = "nozus.com";
var AUDIENCE = "nozus.com";

/**
 * Configuration object for local strategy
 */
var LOCAL_STRATEGY_CONFIG = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
};

/**
 * Configuration object for JWT strategy
 */
var ExtractJwt = require('passport-jwt').ExtractJwt;
var JWT_STRATEGY_CONFIG = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: SECRET,
  issuer : ISSUER,
  audience: AUDIENCE,
  passReqToCallback: false
};

  /**
   * Triggers when user authenticates via local strategy
   */
  function _onLocalStrategyAuth(email, password, next) {
    Admin.findOne({email: email})
      .exec(function (error, admin) {
        if (error) return next(error, false, {});

        if (!admin) return next(null, false, {
          code: 'AUTH_SIGNIN_NO_E',
          message: 'Error con contraseña o email'
          //message: email + ' No se ah encontrado'
        });

        // TODO: replace with new cipher service type
        if (!CipherService.comparePassword(password, admin))
          return next(null, false, {
            code: 'AUTH_SIGNIN_NO_E',
            message: 'Error con contraseña o email'
          });

        return next(null, admin, {});
      });
  }

  /**
   * Triggers when user authenticates via JWT strategy
   */
  function _onJwtStrategyAuth(payload, next) {
    var admin = payload.admin;
    return next(null, admin, {});
  }

  passport.use(
    new LocalStrategy(LOCAL_STRATEGY_CONFIG, _onLocalStrategyAuth));
  passport.use(
    new JwtStrategy(JWT_STRATEGY_CONFIG, _onJwtStrategyAuth));

  module.exports.jwtSettings = {
    expiresIn: '1440m',
    secret: SECRET,
    algorithm : ALGORITHM,
    issuer : ISSUER,
    audience : AUDIENCE
};
