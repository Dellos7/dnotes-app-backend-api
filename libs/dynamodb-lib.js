import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();

export default {
    get: (params) => { return client.get(params).promise(); },
    put: (params) => { return client.put(params).promise(); },
    query: (params) => { return client.query(params).promise(); },
    update: (params) => { return client.update(params).promise(); },
    delete: (params) => { return client.delete(params).promise(); }
};