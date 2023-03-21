export interface IPropsLogin {
    setPassword: (value: string) => void,
    setEmail: (value: string) => void
}

export interface  IPropsRegister {
    setPassword: (value: string) => void,
    setEmail: (value: string) => void,
    setRepeatPassword: (value: string) => void,
    setFirstName: (value: string) => void,
    setUserName: (value: string) => void
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

interface  IPublicUser {
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