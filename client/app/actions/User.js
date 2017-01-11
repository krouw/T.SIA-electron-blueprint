import axios from 'axios'

export function addUser(userData){
  return dispatch => {
    return axios.post('http://localhost:1337/user',userData)
  }
}
