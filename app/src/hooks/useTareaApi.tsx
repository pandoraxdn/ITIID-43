import { useEffect, useState } from "react";
import { pandorApi } from "../api/pandoraApi";
import { TareaResponse } from "../interfaces/tareasInterfaces";
import { FormData } from "./useTareaForm";

interface UseTareaApi{
    isLoading:      boolean;
    listTarea:      TareaResponse;
    loadTarea:      () => void;
    createTarea:    (data: FormData) => void;
    updateTarea:    (data: FormData) => void;
    deleteTarea:    (data: FormData) => void;
}

export const useTareaApi = (): UseTareaApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ listTarea, setListTarea ] = useState<TareaResponse>({} as TareaResponse);

    const apiUrl: string = "http://192.168.34.193:3000/api/dsm44/tarea";

    const loadTarea = async () => {
        setIsLoading( true );
        const reponse = await pandorApi.get<TareaResponse>( apiUrl );
        setListTarea( reponse.data );
        setIsLoading( false );
    }

    useEffect(() => {
        loadTarea();
    },[]);

    const createTarea = async ( data: FormData ) => {
        const dataBody = {
            "nombre": data.nombre,
            "materia": data.materia,
            "fecha": data.fecha,
            "prioridad": Number( data.prioridad ),
        }
        await pandorApi.post( apiUrl, dataBody );
    }

    const updateTarea = async ( data: FormData ) => {
        const dataBody = {
            "nombre": data.nombre,
            "materia": data.materia,
            "fecha": data.fecha,
            "prioridad": Number( data.prioridad ),
        }
        await pandorApi.patch( apiUrl + `/${data.id_tarea}`, dataBody );
    }

    const deleteTarea = async ( data: FormData ) => {
        await pandorApi.delete( apiUrl + `/${data.id_tarea}`);
    }

    return { isLoading, listTarea, loadTarea, createTarea, updateTarea, deleteTarea };
}
