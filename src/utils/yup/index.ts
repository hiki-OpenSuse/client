import * as yup from 'yup'
import {AppErrors} from "../../common/errors";

export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(6, AppErrors.InvalidPassword)
        .required()
})
export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(6, AppErrors.InvalidPassword)
        .required(),
    confirmPassword: yup.string()
        .min(6, AppErrors.InvalidPassword)
        .required(),
    firstName: yup.string()
        .required(AppErrors.RequiredField),
    userName: yup.string()
        .required(AppErrors.RequiredField)
})