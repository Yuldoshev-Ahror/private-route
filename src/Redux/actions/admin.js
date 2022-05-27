import qs from 'qs';
import axios from "axios";
import axiosInterceptor from "../axiosInterceptor";

// import types
import {
    OX_LOGIN_START,
    OX_LOGIN_SUCCSESS,
    OX_LOGIN_FAILED,
    OX_PRODUCTS_START,
    OX_PRODUCTS_SUCCSESS,
    OX_PRODUCTS_FAILED,
} from "../types";

export const fetchLogin = (data) => (dispatch, getState) => {
    const { userName, password, subdomain } = data;
    const url = process.env.REACT_APP_OX_TESTURL + "/security/auth_check";
    dispatch({type: OX_LOGIN_START});
    axios({
        url,
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
            _username: userName,
            _password: password,
            _subdomain: subdomain,
        })
    }).then(res => {
        localStorage.setItem("ox-token", res.data.token)
        dispatch({type: OX_LOGIN_SUCCSESS, pyload: res.data.token})
    }).catch(err => {
        if(err.response && err.response.data) 
            return dispatch({type: OX_LOGIN_FAILED, errorMessage: err.response.data.message});
        dispatch({type: OX_LOGIN_FAILED, errorMessage: ""});
    })
    
}

export const fetGetProducts = () => (dispatch, getState) => {
    const token = getState().Admin.token;
    const url = process.env.REACT_APP_OX_TESTURL + "/variations";

    dispatch({type: OX_PRODUCTS_START});
    axiosInterceptor({
        url,
        method: "POST",
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            "Authorization": "Bearer " + token
        },
        data: {
            size: 1,
            page: 1,
            stock: {
                exist: true,
                location: [
                    42
                ]
            },
         }
    }).then(res => {
        dispatch({type: OX_PRODUCTS_SUCCSESS, pyload: res.data})
    }).catch(err => {
        if(err.response && err.response.data) 
            return dispatch({type: OX_PRODUCTS_FAILED, errorMessage: err.response.data.message});
        dispatch({type: OX_PRODUCTS_FAILED, errorMessage: ""});
    })
    
}
