import { Router } from 'express';
import { confirmMeasure } from '..//controllers/confirmController';

const router = Router();

router.patch('/', confirmMeasure);

export default router;