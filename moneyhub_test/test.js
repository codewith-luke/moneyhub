const bodyParams = {
    scope: 'openid id:test accounts:read transactions:read:all',
    response_type: 'code',
    redirect_uri: 'https://redirectmeto.com/http://localhost:5173/auth/redeem',
    nonce: '',
    claims: JSON.stringify({
        id_token: {
            sub: {essential: true},
            'mh:con_id': {essential: true}
        }
    }),
    prompt: 'consent',
    client_id: '6b50587e-b59b-48c0-a58f-eb2e7477129d'
};

const body = new URLSearchParams(bodyParams).toString();


fetch('https://identity.moneyhub.co.uk/oidc/request', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic NmI1MDU4N2UtYjU5Yi00OGMwLWE1OGYtZWIyZTc0NzcxMjlkOmQ3OGU0ZGFkLWVlYTQtNGY1Ni05Yjk1LTE4MmYxODNkNWVmNQ==',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// https://identity.moneyhub.co.uk/oidc/auth?request_uri=