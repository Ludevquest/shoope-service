import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

export const uploadImageToGemini = async (image: string) => {
  const apiKey = process.env.GEMINI_API_KEY;

  const response = await axios.post(
    GEMINI_API_URL,
    {
      contents: [
        {
          role: 'user',
          parts: [{ text: 'Analyze the image and return the reading value.' }],
        },
      ],
      image: image,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
    }
  );

  return {
    image_url: response.data.image_url,
    measure_value: response.data.measure_value,
    measure_uuid: response.data.measure_uuid,
  };
};