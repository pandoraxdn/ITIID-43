import { useEffect, useState } from "react";
import { pandorApi } from "../api/pandoraApi";
import { UserResponse } from "../interfaces/userInterfaces";
import { FormUserData } from "./useUserForm";

interface UseUserApi{
    isLoading:  boolean;
    listUser:   UserResponse;
    loadUser:   () => void;
    createUser: (data : FormUserData) => void;
    updateUser: (data : FormUserData) => void;
    deleteUser: (data : FormUserData) => void;
}

export const useUserApi = (): UseUserApi => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listUser, setListUser ] = useState<UserResponse>({} as UserResponse);
    const apiUrl = "http://10.172.189.74:3000/api/dsm43/usuarios"

    const loadUser = async () => {
        setIsLoading(true);
        const response = await pandorApi.get<UserResponse>(apiUrl);
        setListUser(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        loadUser();
    },[]);

    const createUser = async ( data: FormUserData ) => {
        const dataBody = {
            username: data.username,
            image: data.image,
            password: data.password,
            email: data.email,
        } 
        await pandorApi.post(apiUrl, dataBody);
    }

    const updateUser = async ( data: FormUserData ) => {
        const dataBody = {
            username: data.username,
            image: data.image,
            password: data.password,
            email: data.email,
        } 
        await pandorApi.patch(apiUrl + `/${data.id_user}`, dataBody);
    }

    const deleteUser = async ( data: FormUserData ) => {
        await pandorApi.delete(apiUrl + `/${data.id_user}`);
    }

    return { isLoading, listUser, loadUser, createUser, updateUser, deleteUser };
}
