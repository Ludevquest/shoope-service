import { Request, Response } from 'express';

export const listMeasures = async (req: Request, res: Response) => {
  const { customer_code } = req.params;
  const { measure_type } = req.query;

  try {
    if (measure_type && !['WATER', 'GAS'].includes((measure_type as string).toUpperCase())) {
      return res.status(400).json({ error_code: 'INVALID_TYPE', error_description: 'Tipo de medição não permitida' });
    }

    res.status(200).json({
      customer_code,
      measures: [],
    });
  } catch (error) {
    res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'An unexpected error occurred' });
  }
};