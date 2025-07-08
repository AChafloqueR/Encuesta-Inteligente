const lambda = require('../index');

jest.mock('aws-sdk', () => {
  const sendEmailMock = jest.fn().mockReturnValue({
    promise: () => Promise.resolve()
  });

  return {
    SES: jest.fn(() => ({
      sendEmail: sendEmailMock
    }))
  };
});

describe('enviarNotificacion Lambda', () => {
  it('debe procesar y enviar correo correctamente', async () => {
    const event = {
      Records: [
        {
          body: JSON.stringify({
            email: "ejemplo@correo.com",
            resumen: "Participación exitosa"
          })
        }
      ]
    };

    const response = await lambda.handler(event);
    expect(response.statusCode).toBe(200);
  });
});