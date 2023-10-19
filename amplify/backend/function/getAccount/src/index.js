import {Moneyhub} from "@mft/moneyhub-api-client";

const AWS = require('aws-sdk');
import config from "../../../../../config";

const docClient = new AWS.DynamoDB.DocumentClient();
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const moneyhub = await Moneyhub(config);
    try {
        const params = {
            TableName: 'moneyhub',
            KeyConditionExpression: '#PK = :value',
            ExpressionAttributeValues: {':value': 'u#lukerbab@gmail.com'},
            ExpressionAttributeNames: {'#PK': 'PK'}
        };

        const result = await docClient.get(params).promise();
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: e.message,
        }
    }

    // TODO: needs to be swapped out for a real account from the db
    const account = {
        userId: '652ff35df13373f1877369ce',
        accountId: 'dc8b7930-78c5-4300-8a2c-92e62125430d'
    }

    try {
        // GET /v2.0/accounts HTTP/1.1
        // Host: api.moneyhub.co.uk
        // Authorization: Bearer access-token-from-step-5

        // TODO: needs to be swapped out for a real account from the db and should
        // and really be based on an integration type rather than me hard coding it and access it here
        // directly. So in short it should be fetching the user from DynamoDB and then
        // based on the integration type it should then run any other data fetching like Moneyhub

        const res = await moneyhub.getAccount(account);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: res,
        };
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: e.message,
        }
    }
};
