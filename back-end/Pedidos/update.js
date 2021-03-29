import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    //const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABELA_PEDIDOS,
        Key: {
            pedidoId: event.pathParameters.id,
            cliente: event.requestContext.identity.cognitoIdentityId,
        },
        UpdateExpression: "SET etapa = :etapa",
        ExpressionAttributeValues: {
            ":etapa": "Finalizada",
        },
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});