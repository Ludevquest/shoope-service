import request from 'supertest';
import app from '../app';
import { uploadImageToGemini } from '../service/serviceGemini'

jest.mock('../service/serviceGemini');

describe('POST /upload', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 and valid response when Gemini API is successful', async () => {
    (uploadImageToGemini as jest.Mock).mockResolvedValue({
      image_url: 'https://example.com/image.png',
      measure_value: 123,
      measure_uuid: 'mock-uuid',
    });

    const response = await request(app).post('/upload').send({
      image: 'base64image',
      customer_code: '12345',
      measure_datetime: new Date(),
      measure_type: 'WATER',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      image_url: 'https://example.com/image.png',
      measure_value: 123,
      measure_uuid: 'mock-uuid',
    });
  });

  it('should return 400 when data is invalid', async () => {
    const response = await request(app).post('/upload').send({
      image: '',
      customer_code: '',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error_code', 'INVALID_DATA');
  });

  it('should handle errors from the Gemini API gracefully', async () => {
    (uploadImageToGemini as jest.Mock).mockRejectedValue(
      new Error('Gemini API error')
    );

    const response = await request(app).post('/upload').send({
      image: 'base64image',
      customer_code: '12345',
      measure_datetime: new Date(),
      measure_type: 'WATER',
    });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error_code', 'SERVER_ERROR');
    expect(response.body).toHaveProperty('error_description', 'An unexpected error occurred');
  });
});
