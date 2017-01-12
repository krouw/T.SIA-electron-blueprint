import axios from 'axios'
import { SET_CONTADOR, ISEMPTY_CONTADOR, AUMT_CONTADOR } from './types'
import isEmpty from 'lodash/isEmpty'

export function getContador(){
  return dispatch => {
    return axios.get('http://localhost:1337/contador?sort=updatedAt DESC&limit=1')
    .then(res => {
      if(isEmpty(res.data[0])){
        dispatch(isEmptyContador());
      }
      else{
        dispatch(setContador(res.data[0]));
      }
    });
  }
}

export function addContador(contador){
  return dispatch => {
    return axios.post('http://localhost:1337/contador/',contador)
    .then( res => {
      console.log(res.data.data);
      dispatch(setContador(res.data.data));
    });
  }
}

export function updateContador(contador){
  return dispatch => {
    return axios.put('http://localhost:1337/contador/'+contador.id,contador)
    .then( res => {
      console.log(res.data);
      dispatch(setContador(res.data));
    });
  }
}

export function aumentoContador(){
  return {
    type: AUMT_CONTADOR,
  }
}

export function isEmptyContador(){
  return {
    type: ISEMPTY_CONTADOR,
  }
}

export function setContador(contador){
  return {
    type: SET_CONTADOR,
    contador,
  }
}
