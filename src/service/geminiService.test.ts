import axios from 'axios';
import { uploadImageToGemini } from './serviceGemini';

// Mock do Axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Gemini Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully call the Gemini API and return the expected response', async () => {
    const mockResponse = {
      data: {
        image_url: 'https://example.com/image.png',
        measure_value: 123,
        measure_uuid: 'mock-uuid',
      },
    };

    mockedAxios.post.mockResolvedValue(mockResponse);

    const result = await uploadImageToGemini('mockBase64Image');

    expect(mockedAxios.post).toHaveBeenCalledWith(
      expect.any(String), // URL da API
      expect.any(Object), // Dados enviados na requisição
      expect.any(Object)  // Configuração da requisição
    );

    expect(result).toEqual({
      image_url: 'https://example.com/image.png',
      measure_value: 123,
      measure_uuid: 'mock-uuid',
    });
  });

  it('should handle errors when the Gemini API fails', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Gemini API error'));

    await expect(uploadImageToGemini('mockBase64Image')).rejects.toThrow(
      'Gemini API error'
    );
  });
});
