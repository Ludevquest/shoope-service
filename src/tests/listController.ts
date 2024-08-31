import request from 'supertest';
import app from '../app';

describe('GET /:customer_code/list', () => {
  it('should return 200 with a list of measures', async () => {
    const response = await request(app).get('/12345/list');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('customer_code', '12345');
    expect(response.body).toHaveProperty('measures');
    expect(Array.isArray(response.body.measures)).toBe(true);
  });

  it('should return 400 when measure type is invalid', async () => {
    const response = await request(app).get('/12345/list?measure_type=invalid');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error_code', 'INVALID_TYPE');
  });
});