import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
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
    id: string | null,
    name: string,
    assetId: string,
    createdAT: string,
    updateAT: string,
    user: number | null
}