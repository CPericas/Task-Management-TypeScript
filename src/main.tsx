import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import TaskProvider from "./context/TaskProvider";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const domain = "dev-zs2cxkhegpp51icz.us.auth0.com"
const clientId = "wXrZMNO9bEt8hwNOUSU7ZylBozJqqzQI"

root.render(
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: "http://localhost:5173/dashboard",
        }}
      >
          <TaskProvider>
              <App />
          </TaskProvider>
        </Auth0Provider>
    </React.StrictMode>
);
