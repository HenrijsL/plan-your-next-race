import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.tsx";
import GuestLayout from "./components/GuestLayout.tsx";
import Dashboard from "./views/Dashboard.tsx";
import Login from "./views/Login.tsx";
import Signup from "./views/Signup.tsx";
import NotFound from "./views/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;
