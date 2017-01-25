

var Init = moment(req.param('Init'));
		var Finish = moment(req.param('Finish'));
		var ContadorInicial = 0;
		var ContadorFinal = 0;
	 	Impresion.find({
			createdAt: { '>': Init.format(),
			'<': Finish.add(23,'hour').format() } })
			.then(function(impresiones){
					if(_.isEmpty(impresiones)){
						return res.send(404,{message: 'No hay registros.'})
					}
					Contador.find({
						createdAt: { '>': moment(impresiones[0].createdAt).format("YYYY-MM-DDT00:00:00"),
						'<': moment(impresiones[0].createdAt).format("YYYY-MM-DDT23:59:59") } })
					.then(function(contadores){
						ContadorInicial = contadores[0].ContadorInicial;
					});
					Contador.find({
						createdAt: { '>': moment(impresiones[impresiones.lenght].createdAt).format("YYYY-MM-DDT00:00:00"),
						'<': moment(impresiones[impresiones.lenght].createdAt).format("YYYY-MM-DDT23:59:59") } })
					.then(function(contadores){
						ContadorFinal = contadores[contadores.lenght].ContadorFinal;
					});
					return res.send(200,impresiones)
				});
