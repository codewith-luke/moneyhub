

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    // To Implement:
    // We would use the moneyhub sdk to then fetch the transactions for the user and return
    // extend to allow some filtering
    return {
        statusCode: 200,
        body: {

        }
    };
};
