/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @type {import('@types/aws-lambda').PostConfirmationConfirmSignUpTriggerEvent}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'moneyhub';

exports.handler = async (event) => {
    console.log("event:", event);
    // To implement: This would be a post signup trigger that would create a user in our database
    // Should of probably used a different a tenant id for the user rather than sub
    // but the idea here would be we return the id and we would use that id and give it
    // to moneyhub when we call linkUser

    try {
        const item = {
            PK: `u#${event.request.userAttributes.sub}`,
            SK: `u#${event.request.userAttributes.sub}`,
            email: event.request.userAttributes.email,
            username: event.request.userAttributes.username
        }

        console.log("creating user db entry:", item);

        docClient.put({
            TableName: tableName,
            Item: item
        });
    } catch (error) {
        console.error(error);
    }
};
