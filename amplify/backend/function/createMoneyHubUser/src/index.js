

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    // POST /users HTTP/1.1
    // Host: identity.moneyhub.co.uk
    // Authorization: Bearer access-token-from-step-1
    // Content-Type: application/json
    // {"clientUserId":"an optional id"}

    // This would just be a call to moneyhub to create a user and we would use our PK for
    // the user that we generated to create the user in moneyhub just to make it more simple
    // for our database queries

    return {
        statusCode: 200,
        body: {

        },
    };
};
