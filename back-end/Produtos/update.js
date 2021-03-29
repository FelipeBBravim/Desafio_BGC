import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABELA_PRODUTOS,
        Key: {
            produtoId: event.pathParameters.id,
        },
        UpdateExpression: "SET nome = :nome, descricao = :descricao, tamanho = :tamanho, nomeMinion = :nomeMinion, material = :material, preco = :preco",
        ExpressionAttributeValues: {
            ":nome": data.nome || null,
            ":descricao": data.descricao || null,
            ":tamanho": data.tamanho || null,
            ":nomeMinion": data.nomeMinion || null,
            ":material": data.material || null,
            ":preco": data.preco || null,
        },
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});