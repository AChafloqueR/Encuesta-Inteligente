const lambda = require('../index');

jest.mock('aws-sdk', () => {
  const mockScan = jest.fn().mockReturnValue({
    promise: () => Promise.resolve({ Items: [{}, {}, {}] })
  });

  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => ({
        scan: mockScan
      }))
    }
  };
});

describe('generarReporte Lambda', () => {
  it('debe retornar la cantidad de respuestas correctamente', async () => {
    const response = await lambda.handler({});
    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(body.totalRespuestas).toBe(3);
  });
});