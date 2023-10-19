import '../App.css'
import {Button, useAuthenticator} from "@aws-amplify/ui-react";
import {Amplify} from 'aws-amplify';
import {useEffect} from "react";
import {redirect} from "react-router-dom";

function Home() {
    const {user} = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        return () => {
            async function fetchUser() {
                const result = await Amplify.API.get('moneyhub', '/account', {
                    email: user.attributes?.email
                });
                console.log(result);
                // TODO: here woud pull out and list the account and its info
                // these would have separate components with a tableview
            }

            fetchUser()
                .catch((error) => {
                    console.log(error)
                })
        }
    }, []);

    async function connectAccount() {
        try {
            const result = await Amplify.API.post('moneyhub', 'integration/moneyhub/connect');
            console.log(result)
            redirect(result.connection_url);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Button
                loadingText=""
                onClick={connectAccount}
            >
                Connect Account
            </Button>
        </div>
    )
}

export default Home
