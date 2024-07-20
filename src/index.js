import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import SearchAi from "./components/SearchAi";
import ErrorPage from "./components/ErrorPage";
import { Auth0Provider } from "@auth0/auth0-react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/searchai",
    element: <SearchAi />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
