import {Navigate, Outlet} from "react-router-dom"
import {useStateContext} from "../context/ContextProvider.tsx";

export default function DefaultLayout() {
    const {token} = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div className="container">
            Default Layout
            <Outlet />
        </div>
    )
}
