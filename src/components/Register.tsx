import {auth} from '../../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User registered successfully!');
            navigate('/dashboard');
        } catch (error) {
            alert('Error during registration: ' + error.message);
        }
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
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
            <button type="submit">Register</button>
        </form>
            <p>Already have an account? <button onClick={handleNavigateToLogin}>Login</button></p>
        </div>
    );
}