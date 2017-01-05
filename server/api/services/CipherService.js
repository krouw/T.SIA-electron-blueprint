var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports = {
  secret: sails.config.jwtSettings.secret,
  issuer: sails.config.jwtSettings.issuer,
  audience: sails.config.jwtSettings.audience,

  /**
   * Hash the password field of the passed user.
   */
  hashPassword: function (admin) {
    if (admin.password) {
      admin.password = bcrypt.hashSync(admin.password);
    }
  },

  /**
   * Compare user password hash with unhashed password
   * @returns boolean indicating a match
   */
  comparePassword: function(password, admin){
    return bcrypt.compareSync(password, admin.password);
  },

  /**
   * Create a token based on the passed user
   * @param user
   */
  createToken: function(admin)
  {
    return jwt.sign({
        admin: admin.toJSON()
      },
      sails.config.jwtSettings.secret,
      {
        algorithm: sails.config.jwtSettings.algorithm,
        expiresIn: sails.config.jwtSettings.expiresInMinutes,
        issuer: sails.config.jwtSettings.issuer,
        audience: sails.config.jwtSettings.audience
      }
    );
  }
}
