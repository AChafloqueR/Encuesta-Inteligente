const { handler } = require('../index');

jest.mock('aws-sdk', () => {
  const putMock = jest.fn().mockReturnValue({ promise: () => Promise.resolve() });
  const sendMock = jest.fn().mockReturnValue({ promise: () => Promise.resolve() });

  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => ({ put: putMock }))
    },
    SQS: jest.fn(() => ({ sendMessage: sendMock }))
  };
});

describe('registrarRespuesta Lambda', () => {
  it('debe registrar la respuesta y enviar mensaje a SQS', async () => {
    const event = {
      body: JSON.stringify({ nombre: 'Ana', edad: 22, respuesta: 'Sí' })
    };

    const res = await handler(event);

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.body)).toHaveProperty('mensaje', 'Respuesta registrada con éxito');
    expect(JSON.parse(res.body)).toHaveProperty('id');
  });
});