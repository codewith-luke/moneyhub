import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import AuthRedeem from "./routes/AuthRedeem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/auth/redeem",
        element: <AuthRedeem/>
    },
]);

export default router;
