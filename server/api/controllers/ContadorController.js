/**
 * ContadorController
 *
 * @description :: Server-side logic for managing contadors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	findContador: function(req, res, next){
		Contador.findOne({createdAt: req.param('createdAt')}, function userFounded(err,contador) {
			if(err) return next(err);
			if(!contador) return next(err);
			res.json(contador);
		});
	},

};
