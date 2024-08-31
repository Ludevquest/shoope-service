import sequelize from '../config/database';
import Measure from '../models/measureModel';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await Measure.sync({ alter: true });
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

syncDatabase();