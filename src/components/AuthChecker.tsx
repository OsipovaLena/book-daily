import { useEffect } from 'react';
import {auth} from '../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthChecker = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Пользователь авторизован
                navigate('/dashboard');
            } else {
                // Пользователь не авторизован
                navigate('/login');
            }
        });

        return () => unsubscribe(); // Отписка при размонтировании
    }, [navigate]);

    return null; // Этот компонент ничего не рендерит
};