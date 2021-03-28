import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TABLE,
        // 'Key' defines the partition key and sort key of the item to be removed
        Key: {
            entidade: "Produto",
            id: event.pathParameters.id, //The id of the product from the path
        },
    };

    await dynamoDb.delete(params);

    return { status: true };

});