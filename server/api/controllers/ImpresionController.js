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
		 		var contadorInicial = 0;
		 		var contadorFinal = 0;
				var pdfRender=[];
		 	 	Impresion.find({
		 			createdAt: { '>': Init.format(),
		 			'<': Finish.add(23,'hour').format() } }).populate('user')
					.then(function (impresiones){
		 					if(_.isEmpty(impresiones)){
		 						return res.send(404,{message: 'No hay registros.'})
		 					}
		 					Contador.find({
		 						createdAt: { '>': moment(impresiones[0].createdAt).format("YYYY-MM-DDT00:00:00"),
		 						'<': moment(impresiones[0].createdAt).format("YYYY-MM-DDT23:59:59") } })
		 					.then(function (contadores){
		 						contadorInicial = contadores[0].contadorInicial;
								console.log(contadorInicial);
								pdfRender.push(contadorInicial);
		 					});
		 					Contador.find({
		 						createdAt: { '>': moment(impresiones[impresiones.length-1].createdAt).format("YYYY-MM-DDT00:00:00"),
		 						'<': moment(impresiones[impresiones.length-1].createdAt).format("YYYY-MM-DDT23:59:59") } })
		 					.then(function (contadores){
		 						contadorFinal = contadores[contadores.length-1].contadorFinal;
								console.log(contadorFinal);
								pdfRender.push(contadorFinal);
		 					});
							var object = {
								contadorI: contadorInicial,
								contadorF: contadorFinal
							}
						
							for(var i=0; i<impresiones.length; i++){
									var object={
										fecha: moment(impresiones[i].createdAt).format("DD/MM/YYYY"),
										name: impresiones[i].user.name,
										rut: impresiones[i].user.rut,
										rol: impresiones[i].user.rol,
										carrera: impresiones[i].user.carrera,
										asignatura: impresiones[i].asignatura,
										observacion: impresiones[i].observacion,
										hojas: impresiones[i].cantidad,
									}
									pdfRender.push(object);
							}
							return res.send(pdfRender);

		 				});



	 }
};
