import { ADD_TOASTS, CLEAR_TOASTS } from '../actions/types'
import shortid from 'shortid'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TOASTS:
        return [
        ...state,
        {
          message: action.toast.text,
          intent: action.toast.intent
        }
      ];
    case CLEAR_TOASTS:
      return [];
    default:
      return state;
  }
};
