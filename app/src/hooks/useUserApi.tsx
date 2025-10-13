import { useEffect, useState } from "react";
import { pandorApi } from "../api/pandoraApi";
import { UserResponse } from "../interfaces/userInterfaces";
import { FormUserData } from "./useFormUser";

interface UseUserApi{
    isLoading:  boolean;
    listUser:   UserResponse;
    loadUsers:  () => void;
    createUser: (data: FormUserData) => void;
    updateUser: (data: FormUserData) => void;
    deleteUser: (data: FormUserData) => void;
}

export const useUserApi = (): UseUserApi => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listUser, setListUser ] = useState<UserResponse>({} as UserResponse);
    const urlApi = "http://192.168.34.193:3000/api/dsm44/usuarios";

    const loadUsers = async () => {
        setIsLoading(true);
        const response = await pandorApi.get<UserResponse>( urlApi );
        setListUser( response.data );
        setIsLoading(false);
    }

    useEffect(()=> {
        loadUsers();
    },[]);

    const createUser = async ( data: FormUserData ) => {
        const dataBody = {
            username:       data.username,
            password:       data.password,
            email:          data.email,
            image:          data.image,
        } 
        await pandorApi.post(urlApi, dataBody);
    }

    const updateUser = async (data: FormUserData) => {
        const dataBody = {
            username: data.username,
            email: data.email,
            image: data.image,
            ...(data.password && { password: data.password }),
        }
        await pandorApi.patch(`${urlApi}/${data.id_user}`, dataBody);
    };

    const deleteUser = async ( data: FormUserData ) => {
        await pandorApi.delete(urlApi + `/${data.id_user}`);
    }

    return { isLoading, listUser, loadUsers, createUser, updateUser, deleteUser };
}
