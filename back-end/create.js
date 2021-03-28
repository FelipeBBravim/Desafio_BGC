import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABLE,
        Item: {
            // The attributes of the item to be created
            entidade: data.entidade,
            id: uuid.v1(),        // The id of the author
            nome: data.nome,            // A unique uuid
            descricao: data.descricao,      // Parsed from request body
            tamanho: data.tamanho,// Parsed from request body
            nomeMinion: data.nomeMinion,      // Current Unix timestamp
            material: data.material,
            preco: data.preco,
        },
    };

    await dynamoDb.put(params);

    return params.Item;

});