import { useReducer } from "react";

export interface AuthReducer{
    count: number;
}

interface CustomReducerContador{
    estado: AuthReducer;
    add:    () => void;
    add2:   () => void;
    reset:  () => void;
    dec:    () => void;
    dec2:   () => void;
}

export const customReducerContador = ( initialState: AuthReducer ): CustomReducerContador => {

    type Action = 
        | { type: "add" } 
        | { type: "add2" } 
        | { type: "dec" } 
        | { type: "dec2" } 
        | { type: "reset" };

    const countReducer = ( state: AuthReducer, action: Action ) => {
        switch( action.type ){
            case "add":
                return { count: state.count + 1 };
            case "dec":
                return { count: (state.count != 0) ? state.count - 1 : 0 };
            case "add2":
                return { count: state.count + 2 };
            case "dec2":
                return { count: (state.count != 0) ? state.count - 2 : 0 };
            case "reset":
                return { count: initialState.count };
        }
    }

    const [ estado, dispatch ] = useReducer( countReducer, initialState );

    const add = () => dispatch({ type: "add" });
    const add2 = () => dispatch({ type: "add2" });
    const reset = () => dispatch({ type: "reset" });
    const dec = () => dispatch({ type: "dec" });
    const dec2 = () => dispatch({ type: "dec2" });

    return { estado, add, add2, reset, dec, dec2 };

}

