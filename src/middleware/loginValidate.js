import * as yup from "yup";

export const loginUserNameValidateFunc = async (userName) => {
    const userNameSchema = yup.object().shape({
        userName: yup.string().required(),
    });
    
    let validateUserName = null;
    try {
        validateUserName = await userNameSchema.validate(userName);
        return {success: true, data: validateUserName}
    } catch(err) {
        return {error: true, data: userName, errorMessage: err.message}
    }
}

export const loginPasswordValidateFunc = async (password) => {
    const passwordSchema = yup.object().shape({
        password: yup.string().required(),
    });

    let validatePassword = null;
    try {
        validatePassword = await passwordSchema.validate(password);
        return {success: true, data: validatePassword}
    } catch(err) {
        return {error: true, data: password, errorMessage: err.message}
    }
}

export const loginSubdomainValidateFunc = async (subdomain) => {
    const subdomainSchema = yup.object().shape({
        subdomain: yup.string().required(),
    });

    let validateSubdomain = null;
    try {
        validateSubdomain = await subdomainSchema.validate(subdomain);
        return {success: true, data: validateSubdomain}
    } catch(err) {
        return {error: true, data: subdomain, errorMessage: err.message}
    }
}