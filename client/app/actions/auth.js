import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizacionToken from '../utils/setAuthorizacionToken';
import { SET_CURRENT_USER } from './types'


export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user,
  }
}

export function loginServer(data){
  return dispatch =>{
    return axios.post('http://localhost:1337/auth/signin',data)
    .then(res =>{
      const token = res.data.token;
      const user = jwtDecode(token);
      localStorage.setItem('jwToken',token);
      setAuthorizacionToken(token);
      dispatch(setCurrentUser(user.admin));
    });
  }
}

export function userSignupRequest(userData){
  return dispatch => {
    return axios.post('http://localhost:1337/auth/signup',userData);
  }
}

export function logout(){
  return dispatch => {
    localStorage.removeItem('jwToken');
    setAuthorizacionToken(false);
    dispatch(setCurrentUser({}));
  }
}
