import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import './index.css'
import router from "./routing.tsx";
import {Authenticator} from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Authenticator>
            <RouterProvider router={router}/>
        </Authenticator>
    </React.StrictMode>,
)
