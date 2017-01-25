/**
 * ImpresionController
 *
 * @description :: Server-side logic for managing impresions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');
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
          return res.send(400, { err: 'Datos Faltantes' });
    		 }
        return res.send(201);
      })
		 })
		 .fail(function(err) {
       return res.send(404, { err: 'usuario no encontrado' })
		 });
	 },

	 pdf: function(req,res,next){
		 		var Init = moment(req.param('Init'));
		 		var Finish = moment(req.param('Finish'));

		 	 	Impresion.find({
		 			createdAt: { '>': Init.format("YYYY-MM-DDT23:59:59"),
		 			'<=': Finish.format("YYYY-MM-DDT23:59:59") } })
					.populate('user')
					.then(function (impresiones){
		 					if(_.isEmpty(impresiones)){
		 						return res.send(404,{message: 'No hay registros.'})
		 					}

							Contador.contadorMin(impresiones[0].createdAt,function(contador){
								var contadorInicial = contador;
								Contador.contadorMax(impresiones[impresiones.length-1].createdAt, function(contador){
									var contadorFinal = contador;
									var object = {
										contadorInicial: contadorInicial.contadorInicial,
										contadorFinal: contadorFinal.contadorFinal,
									}
									var pdfRender = [];
									pdfRender.push(object);
									impresiones.map(function(impresion){
											var object = {
											Fecha: moment(impresion.createdAt).format("DD/MM/YY"),
											Nombre: impresion.user.name,
											Rut: impresion.user.rut,
											Rol: impresion.user.rol,
											Carrera: impresion.user.carrera,
											Asignatura: impresion.asignatura,
											Observacion: impresion.observacion,
											Hojas: impresion.cantidad,
										}
										pdfRender.push(object);
									})
									return res.send(pdfRender);
								});
				      });
		 				});
	 }
};
