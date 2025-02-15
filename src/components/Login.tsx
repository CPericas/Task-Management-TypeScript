import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => loginWithRedirect()}>
                    Log In
                </Button>
            </Form>
            <p className="mt-3 text-center">
                Don't have an account?{" "}
                <span
                    className="text-primary"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Login;