import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: "singIn" }
    | { type: "logout" }
    | { type: "changeUsername", payload: string }
    | { type: "changeEmail", payload: string }
    | { type: "changeFavoriteImage", payload: string };


export const authReducer = ( state: AuthState, action: AuthAction ) => {
    switch( action.type ){
        case "singIn":
            return{
                ...state,
                isLoggedIn: true,
                username:   "no_name_user_yet"
        };
        case "logout":
            return{
                ...state,
                isLoggedIn:     false,
                username:       undefined,
                favoriteImage:  undefined,
                email:          undefined,
        };
        case "changeUsername":
            return{
                ...state,
                username:   action.payload
        };
        case "changeFavoriteImage":
            return{
                ...state,
                favoriteImage:   action.payload
        };
        case "changeEmail":
            return{
                ...state,
                email:   action.payload
        };
    }
}
