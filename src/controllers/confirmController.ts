import { Request, Response } from 'express';

export const confirmMeasure = async (req: Request, res: Response) => {
  const { measure_uuid, confirmed_value } = req.body;

  try {
    if (!measure_uuid || confirmed_value == null) {
      return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Missing required fields' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'An unexpected error occurred' });
  }
};
