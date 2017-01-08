import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizacionToken from '../utils/setAuthorizacionToken';
import { SET_CURRENT_USER } from './types'


export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user,
  }
}

export function loginServer(data){
  return dispach =>{
    return axios.post('http://localhost:1337/auth/signin',data)
    .then(res =>{
      const token = res.data.token;
      const user = jwt.decode(token);
      localStorage.setItem('jwToken',token);
      setAuthorizacionToken(token);
      dispatch(setCurrentUser(user.admin));
    });
  }
}

export function userSignupRequest(userData){
  return dispach => {
    return axios.post('http://localhost:1337/auth/signup',userData);
  }
}
