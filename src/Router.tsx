import {BrowserRouter, Route, Routes} from "react-router-dom";
import RequireAuth from "./components/RequireAuth.tsx";
import {Layout} from "./routes/Layout.tsx";
import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/*<RequireAuth>*/}
                    <Route index element={<Home/>}/>
                    {/*</RequireAuth>*/}
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
