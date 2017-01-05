/**
 * Admin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
 	  	name:{
 	  		type:'string',
 	      required: true
 	  	},
       rut:{
         type:'string',
         required:true
       },
 	  	email:{
 	  		type:'email',
 	  		unique: true,
 	      required: true
 	  	},
       username:{
         type:'string',
         unique: true,
         required:true
       },
       password:{
         type:'string',
         required: true
       },
       impresion:{
         collection: 'impresion',
         via: 'admin'
       },
       toJSON: function () {
          var obj = this.toObject();
          delete obj.password;
          return obj;
      }
    },
    beforeUpdate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    },
    beforeCreate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    }
};
