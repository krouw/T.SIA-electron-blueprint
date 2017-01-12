import isEmpty from 'lodash/isEmpty'
import { SET_CONTADOR } from '../actions/types'

const initialState = {
  isActive: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTADOR:
      if(isEmpty(action.contador)){
        return {
          ...state,
          isContador: false,
        }
      }
      else{
        const fecha = action.contador.updatedAt.split('T');
        if(isEmpty(action.contador.contadorFinal)){
          return {
            ...state,
            isContador: true,
            isActive: true,
            contadorInicial: action.contador.contadorInicial,
            fecha: fecha[0],
          }
        }
        else{
          return {
            ...state,
            isContador: true,
            isActive: false,
            contadorInicial: action.contador.contadorInicial,
            contadorFinal: action.contador.contadorFinal,
            fecha: fecha[0],
          }
        }
      }
    default:
        return state;
  }
}
