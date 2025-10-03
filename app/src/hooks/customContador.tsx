import { useState } from "react";

interface CustomContador{
    contador:   number;
    add:        () => void;
    dec:        () => void;
    reset:      () => void;
}

export const customContador = ( initialValue: number ): CustomContador => {

    const [ contador, setContador ] = useState(initialValue);

    const add = () => setContador(contador + 1);
    const dec = () => (contador != 0) ? setContador(contador - 1)  : setContador(0);
    const reset = () => setContador(initialValue);

    return { contador, add, dec, reset };
}
