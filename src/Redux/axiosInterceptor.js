import axios from "axios";
import store from "./store.js";

import { OX_LOGIN_FAILED } from "./types";

const newAxios = axios.create({
    baseURL: process.env.REACT_APP_OX_TESTURL
})

newAxios.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, (err) => {
    if(err && err.response.data && err.response.data.code === 401){
        localStorage.removeItem("ox-token");
        store.dispatch({type: OX_LOGIN_FAILED});
    }
    return Promise.reject(err);
})

export default newAxios;