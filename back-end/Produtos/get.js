import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TABELA_PRODUTOS,
        Key: {
            produtoId: event.pathParameters.id,
        },
    };

    const result = await dynamoDb.get(params);
    if(!result.Item) {
        throw new Error("Produto não encontrado.");
    }

    return result.Item;
});