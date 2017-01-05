import axios from 'axios';

export function loginServer(data){
  return dispach =>{
    return axios.post('http://localhost:1337/auth/signin',data);
  }
}

export function userSignupRequest(userData){
  return dispach => {
    return axios.post('http://localhost:1337/auth/signup',userData);
  }
}
