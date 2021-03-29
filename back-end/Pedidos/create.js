import * as uuid from "uuid";
import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABELA_PEDIDOS,
        Item: {
            pedidoId: uuid.v1(),
            cliente: event.requestContext.identity.cognitoIdentityId,
            produto: data.produto,
            etapa: "No Carrinho",
        },
    };

    await dynamoDb.put(params);

    return params.Item;

});