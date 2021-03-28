import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABLE,
        // 'Key' defines the partition key and sort key of the item to be updated
        Key: {
            entidade: "Produto",
            id: event.pathParameters.id, //The id of the product from the path
        },
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression: "SET nome = :nome, descricao = :descricao, tamanho = :tamanho, nomeMinion = :nomeMinion, material = :material, preco = :preco",
        ExpressionAttributeValues: {
            ":nome": data.nome || null,
            ":descricao": data.descricao || null,
            ":tamanho": data.tamanho || null,
            ":nomeMinion": data.nomeMinion || null,
            ":material": data.material || null,
            ":preco": data.preco || null,
        },
        // 'ReturnValues' specifies if and how to return the item's attributes,
        // where ALL_NEW returns all attributes of the item after the update; you
        // can inspect 'result' below to see how it works with different settings
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});