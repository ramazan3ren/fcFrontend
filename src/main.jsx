import "../src/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/routes";
import { Provider } from "./context/context";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("body")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  </GoogleOAuthProvider>
);
