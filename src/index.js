import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import ChatAi from "./components/ChatAi"
import ErrorPage from "./components/ErrorPage"
import { Auth0Provider } from "@auth0/auth0-react"
const router = createBrowserRouter([
            {
                path:"/",
                element:<App/>
            },
            {
               path:"/chatai" ,
               element:<ChatAi/>
            },
            {
                path:"/*",
                element:<ErrorPage/>
            }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Auth0Provider
    domain="dev-d7ofl5e76ija7qcf.us.auth0.com"
    clientId="0EvDad3XwwELrVSp9oGpQZxgY74C6m9t"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router}/>
  </Auth0Provider>,
)