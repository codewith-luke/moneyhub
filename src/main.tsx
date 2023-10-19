import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Authenticator} from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import Router from "./Router.tsx";
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Authenticator.Provider>
            <Router/>
        </Authenticator.Provider>
    </React.StrictMode>,
)