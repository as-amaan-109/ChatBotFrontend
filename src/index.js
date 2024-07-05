import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import ChatAi from "./components/ChatAi"
import ErrorPage from "./components/ErrorPage"
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
    <RouterProvider router={router}/>
)