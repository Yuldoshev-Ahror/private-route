// import types
import {
    OX_PRODUCTS_START,
    OX_LOGIN_SUCCSESS,
    OX_PRODUCTS_FAILED,
    OX_PRODUCTS_SUCCSESS,
    OX_LOGIN_START,
    OX_LOGIN_FAILED,
} from "../types";

const initialState = {
    token: localStorage.getItem("ox-token") || null,
    login: {
        start: false,
        success: false,
        failed: false,
        errorMessage: ""
    },
    products: {
        start: false,
        success: false,
        failed: false,
        data: null,
        errorMessage: ""
    }
}

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case OX_LOGIN_START:
            return {...state, login: { start: true, success: false, failed: false, errorMessage: ""}}
        case OX_LOGIN_SUCCSESS:
            return {...state, login: { start: false, success: true, failed: false, errorMessage: ""}, token: action.pyload}
        case OX_LOGIN_FAILED:
            return {...state, login: { start: false, success: false, failed: true, errorMessage: action.errorMessage}, token: null}
        case OX_PRODUCTS_START:
            return {...state, products: {...state.products, start: true, success: false, failed: false, errorMessage: ""}}
        case OX_PRODUCTS_SUCCSESS:
            return {...state, products: { start: false, success: true, failed: false, data: action.pyload, errorMessage: ""}}
        case OX_PRODUCTS_FAILED:
            return {...state, products: {...state.products, start: false, success: false, failed: true, errorMessage: action.errorMessage}}
        default: return {...state}
    }
}

export default adminReducer;