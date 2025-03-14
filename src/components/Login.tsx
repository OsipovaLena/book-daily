import { useState } from 'react';
import {auth} from '../../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Header} from "./Header";

 export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
            navigate('/dashboard');
        } catch (error) {
            alert('Error during login: ' + error.message);
        }
    };

     const handleNavigateToRegister = () => {
         navigate('/register'); // Перенаправление на страницу регистрации
     };

    return (
        <div>
            <Header/>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
            <p>Don't have an account? <button onClick={handleNavigateToRegister}>Register</button></p>
        </div>
    );
};