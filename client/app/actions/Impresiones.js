import axios from 'axios'

export function addUser(userData){
  console.log(userData);
  return dispatch => {
    return axios.post('http://localhost:1337/user',userData)
  }
}
