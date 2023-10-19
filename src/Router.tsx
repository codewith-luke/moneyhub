import {BrowserRouter, Route, Routes} from "react-router-dom";
import RequiresAuth from "./components/RequiresAuth.tsx";
import {Layout} from "./routes/Layout.tsx";
import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={
                        <RequiresAuth>
                            <Home/>
                        </RequiresAuth>
                    }/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
