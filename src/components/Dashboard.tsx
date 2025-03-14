import {auth} from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

 export const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Перенаправление на страницу входа после выхода
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };

    return (
        <div>
            <h1>Welcome to your Dashboard!</h1>
            <p>This is your personal area.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
