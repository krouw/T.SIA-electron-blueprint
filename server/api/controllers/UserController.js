/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//var userRut = ;
	findUser: function(req, res, next){
		User.findOne({rut: req.param('rut')}, function userFounded(err,user) {
			if(err) return next(err);
			if(!user) return next(err);
			res.json(user);
			//console.log(user);
		});
	},



};
