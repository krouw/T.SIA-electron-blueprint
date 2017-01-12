import isEmpty from 'lodash/isEmpty'
import { SET_CONTADOR, ISEMPTY_CONTADOR } from '../actions/types'

const initialState = {
  isActive: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ISEMPTY_CONTADOR:
      return {
        ...state,
        isContador: false,
      }
    case SET_CONTADOR:
      const fecha = action.contador.updatedAt.split('T');
      const active = isEmpty(action.contador.contadorFinal);
      return {
        ...state,
        isContador: true,
        isActive: active,
        contadorInicial: action.contador.contadorInicial,
        contadorFinal: action.contador.contadorFinal,
        fecha: fecha[0],
        id: action.contador.id,
      }
    default:
        return state;
  }
}
