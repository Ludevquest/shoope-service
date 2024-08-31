import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  host: "db",
  dialect: 'postgres',
  logging: false,
});

export default sequelize;