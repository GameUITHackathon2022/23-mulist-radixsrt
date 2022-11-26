import { GOOGLE_CLIENT_ID } from '../constants/public_keys'
import React, { useEffect } from "react";

async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let res = await fetch('/api/user/auth/google', {
        method: 'POST',
        body: JSON.stringify({
            token: response.credential,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    res = await res.json()
    console.log(res)
}
function GLogin() {
    console.log(GOOGLE_CLIENT_ID)

    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
            });

            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            )
            google.accounts.id.prompt(); // also display the One Tap dialog

            // google.accounts.id.prompt()
        }
    },[])

    return (
        <div id="buttonDiv"></div>
    )

}


export default GLogin