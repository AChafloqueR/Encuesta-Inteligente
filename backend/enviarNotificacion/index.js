const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
  for (const record of event.Records) {
    const mensaje = JSON.parse(record.body);

    const params = {
  Destination: {
    ToAddresses: [mensaje.email]
  },
  Message: {
    Body: {
      Text: {
        Data: `Gracias por completar la encuesta. Resumen: ${mensaje.resumen}`
      }
    },
    Subject: { Data: "Confirmación de Encuesta" }
  },
  Source: "tucorreo@dominio.com"
};

    try {
      await ses.sendEmail(params).promise();
      console.log(`Correo enviado a ${mensaje.email}`);
    } catch (error) {
      console.error('Error al enviar correo:', error);
    }
  }

  return { statusCode: 200, body: 'Correos procesados' };
};