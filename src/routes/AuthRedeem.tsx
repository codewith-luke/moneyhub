import {useParams} from "react-router-dom";
import {useEffect} from "react";

type Params = {
    code: string;
    state: string;
}

// Here I would have extracted the code + state from the url and sent it to the completeMoneyHubConnect endpoint via the
// http gateway, then redirecting back to the app.
function AuthRedeem() {
    const {code, state} = useParams<Params>();

    useEffect(() => {
        if (!state) {
            console.error('No state provided')
            return;
        }

        try {
            const {userId} = JSON.parse(state);
            console.log(userId, code);
        } catch (e) {
            console.error('Invalid state provided')
            return;
        }

        return () => {

        }
    }, []);
    return (
        <div>
            <h1>AuthRedeem</h1>
        </div>
    );
}

export default AuthRedeem;