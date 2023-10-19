// components/Layout.js
import {Outlet, useNavigate} from 'react-router-dom';
import {useAuthenticator, Button, View} from '@aws-amplify/ui-react';

export function Layout() {
    const {route, signOut} = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <>
            <nav>
                {route === 'authenticated' && <Button onClick={() => logOut()}>Logout</Button>}
            </nav>

            <View/>

            <Outlet/>
        </>
    );
}