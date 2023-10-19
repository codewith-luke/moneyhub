/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    // To implement: we would take our user information and
    // This would involve a new field for our user PK a new SK that is the provider name with a p# prefix

    return {
        statusCode: 200,
        body: {},
    };
};
