import { ADD_FLASH_MESSAGE } from '../actions/types'
import shortid from 'shortid'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
        return [
        ...state,
        {
          message: action.message.text,
          intent: action.message.type
        }
      ];
    default:
      return state;
  }
};
