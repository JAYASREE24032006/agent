import axios from 'axios';
import { useEffect } from 'react';

// Create axios instance
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000', // Bypass Proxy for debugging
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const useAuthInterceptor = (navigate) => {
    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, [navigate]);
};

export default useAuthInterceptor;
