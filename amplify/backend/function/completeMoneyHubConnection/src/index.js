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
    // code=example-auth-code&grant_type=authorization_code&redirect_uri=https%3A%2F%
    // 2Fredirectmeto.com%2Fhttp%3A%2F%2Flocalhost%3A5173%2Fauth%2Fredeem&sub=example-user-id

    // Here we would just return a success or failure

    return {
        statusCode: 200,
        body: {
            status: 'success'
        }
    };
};
