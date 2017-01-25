/**
 * Contador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var moment = require('moment')

module.exports = {
  schema: true,
  attributes: {
    contadorInicial:{
      type:'int',
        required: true,
    },
    contadorFinal:{
      type: 'int',
    },
    isActive:{
      type: 'boolean',
    }
  },
  contadorMin: function(date,cb){
      Contador.find({
        createdAt: { '>': moment(date).format("YYYY-MM-DDT00:00:00"),
        '<': moment(date).format("YYYY-MM-DDT23:59:59") } })
      .exec( function(err,contadores){
        if(err) return {}
        var contador = contadores[0];
        return cb(contador);
      });
    },
    contadorMax: function(date,cb){
      Contador.find({
        createdAt: { '>': moment(date).format("YYYY-MM-DDT00:00:00"),
        '<': moment(date).format("YYYY-MM-DDT23:59:59") } })
      .exec( function(err,contadores){
        if(err) return {}
        var contador = contadores[contadores.length-1];
        return cb(contador);
      });
    },
};
