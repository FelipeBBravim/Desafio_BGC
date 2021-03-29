import * as uuid from "uuid";
import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABELA_PRODUTOS,
        Item: {
            produtoId: uuid.v1(),
            nome: data.nome,
            descricao: data.descricao,
            tamanho: data.tamanho,
            nomeMinion: data.nomeMinion,
            material: data.material,
            preco: data.preco,
            imagem: data.imagem,
        },
    };

    await dynamoDb.put(params);

    return params.Item;

});