import isEmpty from 'lodash/isEmpty'
import { SET_CONTADOR, ISEMPTY_CONTADOR, AUMT_CONTADOR } from '../actions/types'

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
      if(active){
        return {
          ...state,
          isContador: true,
          isActive: active,
          contadorInicial: parseInt(action.contador.contadorInicial),
          contadorFinal: parseInt(action.contador.contadorInicial),
          fecha: fecha[0],
          id: action.contador.id,
        }
      }
      else{
        return {
          ...state,
          isContador: true,
          isActive: active,
          contadorInicial: parseInt(action.contador.contadorInicial),
          contadorFinal: parseInt(action.contador.contadorFinal),
          fecha: fecha[0],
          id: action.contador.id,
        }
      }
    case AUMT_CONTADOR:
    console.log(state);
      return {
        ...state,
        contadorFinal: state.contadorFinal+1,
      }
    default:
        return state;
  }
}
