import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import RootLayout from "./RootLayout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"


const AppRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout />,
            children: 
            [
                {
                    index: true,
                    element: <LandingPage />
                }, 
                {
                    path: '/Home',
                    element: <LandingPage />
                },
                {
                    path: '/Login',
                    element: <Login />
                },
                {
                    path: '/Signup',
                    element: <Signup />
                },
                {
                    path: '*',
                    element: <h1> 404 </h1>
                }
            ]
        }
    ]
)
export default AppRouter