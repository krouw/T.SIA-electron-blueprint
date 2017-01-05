/**
 * Impresion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      cantidad:{
        type:'int',
        required:true
      },
      observacion:{
        type:'text',
        required:true
      },
      asignatura:{
        type:'string',
        required:true
      },
      user:{
        model: 'user'
      },
      admin:{
        model: 'admin'
      }
    }
};
