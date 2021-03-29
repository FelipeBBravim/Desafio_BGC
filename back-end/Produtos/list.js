import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TABELA_PRODUTOS,
    };

    const result = await dynamoDb.scan(params);

    return result;
});