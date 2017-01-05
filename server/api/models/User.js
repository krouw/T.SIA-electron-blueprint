/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  	name:{
	  		type:'string',
	      required: true
	  	},
      rut:{
        type:'string',
        required:true
      },
      carrera:{
        type:'string',
        required:true
      },
      rol:{
        type:'string',
        required:true
      },
      impresion:{
   			collection: 'impresion',
   			via: 'user'
   		}
    }
};
