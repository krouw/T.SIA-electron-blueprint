import isEmpty from 'lodash/isEmpty'
import { SET_DIALOG, CLOSE_DIALOG } from '../actions/types'

const initialState = {
  active: false,
  icon: '',
  title: '',
  message: '',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        active: true,
        icon: action.Dialog.icon,
        title: action.Dialog.title,
        message: action.Dialog.message,
        ButtonclassName: action.Dialog.className,
        Intent: action.Dialog.Intent,
        ButtonText: action.Dialog.ButtonText,
        payload: action.Dialog.handleButton,
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        active: false,
      }
    default:
        return state;
  }
}
