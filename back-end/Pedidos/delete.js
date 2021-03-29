import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TABELA_PEDIDOS,
        Key: {
            pedidoId: event.pathParameters.id,
            cliente: event.requestContext.identity.cognitoIdentityId,
        },
    };

    await dynamoDb.delete(params);

    return { status: true };

});