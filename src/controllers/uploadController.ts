import { Request, Response } from 'express';
import { uploadImageToGemini } from '../service/serviceGemini';

export const uploadImage = async (req: Request, res: Response) => {
  const { image, customer_code, measure_datetime, measure_type } = req.body;

  try {
    // Validate inputs
    if (!image || !customer_code || !measure_datetime || !measure_type) {
      return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Missing required fields' });
    }

    // Integrate with Gemini API
    const result = await uploadImageToGemini(image);

    // Save the result to the database (assuming a saveMeasure function exists)
    // const measure = await saveMeasure(result);

    res.status(200).json({
      image_url: result.image_url,
      measure_value: result.measure_value,
      measure_uuid: result.measure_uuid,
    });
  } catch (error) {
    res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'An unexpected error occurred' });
  }
};