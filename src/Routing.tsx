import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./components/Register";
import {Login} from "./components/Login"
import {PrivateRoute} from "./components/PrivateRouter";
import {Dashboard} from "./components/Dashboard";
import {AuthChecker} from "./components/AuthChecker";
import App from "./App";


export const AppRouter = () => {

    return (
            <BrowserRouter>
                {/*<AuthChecker />*/}
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<App/>} />
                </Routes>
            </BrowserRouter>
    )
}