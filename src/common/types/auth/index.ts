import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>,
    loading: boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>,
    loading: boolean
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    userName: string,
    email: string,
    createdAT: string,
    updateAT: string,
    watchlist: [IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    assetId: string,
    createdAT: string,
    updateAT: string,
    user: number | null
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    firstName: string
    lastName: string
    email: string
    password: string
}