import { Router } from 'express';
import { listMeasures } from '../controllers/listController';

const router = Router();

router.get('/', listMeasures);

export default router;