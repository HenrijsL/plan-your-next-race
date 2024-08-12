import {Navigate, Outlet} from "react-router-dom"
import {useStateContext} from "../context/ContextProvider.tsx";

export default function GuestLayout() {
    const {token} = useStateContext();

    if (token) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}
