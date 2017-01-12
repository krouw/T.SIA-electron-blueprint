import axios from 'axios'

export function addImpresion(data,user){
  return dispatch => {
    return axios.post(`http://localhost:1337/user/${user}/impresion`,data);
  }
}
