import express from 'express';
import uploadRoutes from './routes/uploadRoute';
import confirmRoutes from './routes/confirmRoute';
import listRoutes from './routes/listRoute';

const app = express();

app.use(express.json());

app.use('/upload', uploadRoutes);
app.use('/confirm', confirmRoutes);
app.use('/:customer_code/list', listRoutes);

export default app;