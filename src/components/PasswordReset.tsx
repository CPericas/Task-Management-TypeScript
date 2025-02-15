import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const PasswordReset: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    const handleResetPassword = () => {
        loginWithRedirect({
            screen_hint: "reset_password",
        } as any);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Password Reset</h2>
            <Button variant="primary" onClick={handleResetPassword}>
                Reset Password
            </Button>
        </div>
    );
};

export default PasswordReset;