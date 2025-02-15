import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Form } from "react-bootstrap";

const SignUp: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="comtainer mt-5">
            <h2 className="text-center">Sign Up</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => loginWithRedirect({ screen_hint: "signup"} as any )}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;