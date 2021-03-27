import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TABLE_PRODUTOS,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            produtoId: event.pathParameters.id, //The id of the product from the path
        },
    };

    const result = await dynamoDb.get(params);
    if(!result.Item) {
        throw new Error("Produto não encontrado.");
    }

    //Return the retrieved item
    return result.Item;
});