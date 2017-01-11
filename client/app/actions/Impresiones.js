import axios from 'axios'

export function addImpresion(data){
  console.log(data);
  return dispatch => {
    return axios.post('http://localhost:1337/admin/',data)
  }
}
