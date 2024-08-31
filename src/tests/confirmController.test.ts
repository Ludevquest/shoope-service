import request from 'supertest';
import app from '../app';
import Measure from '../models/measureModel';

jest.mock('../models/measureModel');

describe('PATCH /confirm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 when measure is confirmed', async () => {
    (Measure.findOne as jest.Mock).mockResolvedValue({
      measure_uuid: 'mock-uuid',
      has_confirmed: false,
      save: jest.fn().mockResolvedValue(true),
    });

    const response = await request(app).patch('/confirm').send({
      measure_uuid: 'mock-uuid',
      confirmed_value: 100,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
  });

  it('should return 404 when measure is not found', async () => {
    (Measure.findOne as jest.Mock).mockResolvedValue(null);

    const response = await request(app).patch('/confirm').send({
      measure_uuid: 'non-existent-uuid',
      confirmed_value: 100,
    });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error_code', 'MEASURE_NOT_FOUND');
  });
});