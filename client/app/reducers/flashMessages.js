import { ADD_FLASH_MESSAGE } from '../actions/types'
import shortid from 'shortid'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      let prueba = [
        ...state,
        {
          text: action.message.text,
          type: action.message.type
        }
      ];
      console.log(prueba);
      return prueba;
    default:
      return state;
  }
};
