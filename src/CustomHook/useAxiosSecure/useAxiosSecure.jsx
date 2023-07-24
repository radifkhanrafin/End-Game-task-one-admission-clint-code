import React, { useContext, useEffect } from 'react';
import axios from 'axios';
// import { AuthContext } from '../../AuthProvaider/AuthProvaider';


const useAxiosSecure = () => {
    // const { logOut } =useContext(AuthContext)


    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000/',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            // console.log(token)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            // console.log( 'config' ,config)
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                console.log('axiox error respone' , error.response)
                console.log(error)
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await logOut();
                    // navigate('/login');
                    console.log('user logout')
                }
                return Promise.reject(error);
            }
        );
    }, [axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;