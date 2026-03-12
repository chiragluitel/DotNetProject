import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import RootLayout from "./RootLayout"


const AppRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: 
            [
                <RootLayout />
            ],
            children: 
            [
                {
                    index: true,
                    element: <LandingPage />
                }, 
                {
                    path: '/Landing',
                    element: <LandingPage />
                },
                {
                    path: '/Home',
                    element: <LandingPage />
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