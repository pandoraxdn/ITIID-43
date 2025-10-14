import React, { createContext, useReducer, ReactNode } from "react";
import { authReducer } from "./authReducer";

// Definir la estructura del Context
export interface AuthState{
    isLoggedIn:     boolean;
    username:       string | undefined;
    email:          string | undefined;
    favoriteImage:  string | undefined;
}

// Definir estado inicial
export const AuthInitialState: AuthState = {
    isLoggedIn:     false,
    username:       undefined,
    email:          undefined,
    favoriteImage:  undefined,
}

export interface AuthContextProps{
    authState:              AuthState;
    singIn:                 () => void;
    logout:                 () => void;
    changeUsername:         (username: string) => void;
    changeFavoriteImage:    (image: string) => void;
    changeEmail:            (email: string) => void;
}

// Creación de context
export const AuthContext = createContext({} as AuthContextProps);

// Creación del provider
export const AuthProvider = ( { children }: { children: ReactNode } ) => {

    // Función Reducer
    const [ authState, dispatch ] = useReducer( authReducer, AuthInitialState );

    const singIn = () => dispatch({ type: "singIn" });

    const logout = () => dispatch({ type: "logout" });

    const changeFavoriteImage = ( sourceImage: string ) => {
        dispatch({ type: "changeFavoriteImage", payload: sourceImage });
    };

    const changeEmail = ( email: string ) => {
        dispatch({ type: "changeEmail", payload: email });
    };

    const changeUsername = ( username: string ) => {
        dispatch({ type: "changeUsername", payload: username });
    };

    return(
        <AuthContext
            value={{
                authState,
                singIn,
                logout,
                changeEmail,
                changeFavoriteImage,
                changeUsername
            }}
        >
            { children }
        </AuthContext>
    );
}
