import { Navigate } from 'react-router-dom';
import {auth} from '../../firebase.js'

export const PrivateRoute = ({ children }) => {
    const user = auth.currentUser;
    return user ? children : <Navigate to="/login" />;
};