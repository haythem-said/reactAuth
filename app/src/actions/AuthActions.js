import axios from "axios";

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
