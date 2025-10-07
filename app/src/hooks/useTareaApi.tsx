import { useEffect, useState } from "react";
import { pandorApi } from "../api/pandoraApi";
import { TareaResponse } from "../interfaces/tareasInterfaces";
import { FormData } from "./useTareaForm";

interface UseTareaApi{
    isLoading:      boolean;
    listTareas:     TareaResponse;
    loadTareas:     () => void;
    createTarea:    ( data: FormData ) => void;
    updateTarea:    ( data: FormData ) => void;
    deleteTarea:    ( data: FormData ) => void;
}

export const useTareaApi = (): UseTareaApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listTareas, setListTareas ] = useState<TareaResponse>({} as TareaResponse);

    const apiUrl = "http://10.172.189.74:3000/api/dsm43/tarea";

    const loadTareas = async () => {
        setIsLoading(true);
        const response = await pandorApi.get<TareaResponse>(apiUrl);
        setListTareas( response.data );
        setIsLoading(false);
    }

    useEffect( () => {
        loadTareas();
    },[]);

    const createTarea = async ( data: FormData ) => {
        const dataBody = {
            "nombre":       data.nombre,
            "materia":      data.materia,    
            "fecha":        data.fecha,
            "prioridad":    Number(data.prioridad),
        }

        await pandorApi.post(apiUrl, dataBody);
    }


    const updateTarea = async ( data: FormData ) => {
        const dataBody = {
            "nombre":   data.nombre,
            "materia":  data.materia,    
            "fecha":    data.fecha,
            "prioridad": Number( data.prioridad ),
        }

        await pandorApi.patch(apiUrl + `/${data.id_tarea}`, dataBody);
    }

    const deleteTarea = async ( data: FormData ) => {
        await pandorApi.delete(apiUrl + `/${data.id_tarea}`);
    }

    return { isLoading, listTareas, loadTareas, createTarea, updateTarea, deleteTarea };
}
