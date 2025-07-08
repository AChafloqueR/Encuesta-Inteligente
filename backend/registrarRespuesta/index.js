const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const sqs = new AWS.SQS();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const id = uuidv4();

  const params = {
    TableName: 'RespuestasEncuesta',
    Item: {
      id,
      ...body,
      fecha: new Date().toISOString()
    }
  };

  await dynamodb.put(params).promise();

  const mensajeSQS = {
    MessageBody: JSON.stringify({ id, ...body }),
    QueueUrl: process.env.SQS_URL
  };

  await sqs.sendMessage(mensajeSQS).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ mensaje: 'Respuesta registrada con éxito', id })
  };
};