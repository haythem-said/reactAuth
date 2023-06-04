import axios from "axios";
import jwt_decode from "jwt-decode";

import { ERRORS, SET_USER } from "../redux/types";

export const Registration = (form, navigate) => (dispatch) => {
  axios
    .post("/api/register", form)
    .then((res) => {
        navigate('/login')
        dispatch({
            type: ERRORS,
            payload: {}
        })
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};
export const LoginAction = (form, navigate) => (dispatch) => {
  axios
    .post("/api/login", form)
    .then((res) => {
        const {token}=res.data 
        localStorage.setItem('jwt',token)
        const  decoded = jwt_decode(token);
        navigate('/')
        dispatch({
          type: SET_USER,
          payload: decoded
      })
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};

