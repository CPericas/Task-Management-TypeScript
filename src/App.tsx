import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./components/TaskDetails";
import CreateTaskPage from "./components/TaskCreation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import TaskProvider from "./context/TaskProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";


const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();
    return (
        <TaskProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/dashboard" element={isAuthenticated ? <TaskDashboard /> : <Login />} />
                    <Route path="/details/:taskId" element={<TaskDetails />} />
                    <Route path="/creation" element={<CreateTaskPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </Router>
        </TaskProvider>
    );
};

export default App;



