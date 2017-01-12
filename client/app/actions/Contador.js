import axios from 'axios'
import { SET_CONTADOR } from './types'

export function getContador(){
  return dispatch => {
    return axios.get('http://localhost:1337/contador?sort=updatedAt DESC&limit=1')
    .then(res => {
      dispatch(setContador(res.data[0]));
    });
  }
}

export function addContador(contador){
  return dispatch => {
    return axios.post('http://localhost:1337/contador/',contador);
  }
}

export function setContador(contador){
  return {
    type: SET_CONTADOR,
    contador,
  }
}
