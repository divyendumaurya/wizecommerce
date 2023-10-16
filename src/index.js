import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvier } from "./context/FilterContext";
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-dtalu7n7nghu7vjs.us.auth0.com"
    clientId="jFMDKEmXdFJFmQjl403e3Mwxb109ydEA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<AppProvider>
    <FilterContextProvier>
<App />
</FilterContextProvier>
</AppProvider>
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
