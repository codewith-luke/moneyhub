/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    // TO Implement:
    // POST /oidc/token HTTP/1.1
    // Host: identity.moneyhub.co.uk
    // Authorization: Basic NmI1MDU4N2UtYjU5Yi00OGMwLWE1OGYtZWIyZTc0NzcxMjlkOmQ3OGU0Z
    // GFkLWVlYTQtNGY1Ni05Yjk1LTE4MmYxODNkNWVmNQ==
    // Content-Type: application/x-www-form-urlencoded
    // grant_type=client_credentials&scope=accounts%3Aread%20transactions%3Aread%3Aal
    // l&sub=example-user-id

    // Here we would just return the access token
    return {
        statusCode: 200,
        body: {
            token: ''
        }
    };

};
