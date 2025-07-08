const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const params = {
      TableName: 'EncuestasRespuestas'
    };

    const data = await docClient.scan(params).promise();

    const resumen = {
      totalRespuestas: data.Items.length
    };

    return {
      statusCode: 200,
      body: JSON.stringify(resumen)
    };
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al generar el reporte' })
    };
  }
};