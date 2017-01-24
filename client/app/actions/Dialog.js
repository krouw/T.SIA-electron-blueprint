import { SET_DIALOG, CLOSE_DIALOG } from './types.js'

export function setDialog(Dialog){
  return {
    type: SET_DIALOG,
    Dialog
  }
}

export function closeDialog(){
  return {
    type: CLOSE_DIALOG,
  }
}
