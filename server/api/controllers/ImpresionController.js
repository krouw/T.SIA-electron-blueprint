/**
 * ImpresionController
 *
 * @description :: Server-side logic for managing impresions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	associateImpresionToUser: function(req,res,next){
    var user_rut = req.params['rut'];
		User.findOne({rut:user_rut}).then(function(user) {
      var impresion = {
        user: user.id,
        cantidad: req.body.cantidad,
        asignatura: req.body.asignatura,
        observacion: req.body.observacion
      }
		  user.impresion.add(impresion);
  		user.save( function(err){
        if(err){
          return res.json(err);
    		 }
        return res.send(201);
      })
		 })
		 .fail(function(err) {
			 sails.log.error('Unexpected error: ' +err);
       return res.send(500)
		 });
	 },
};
