import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Measure extends Model {
  public measure_uuid!: string;
  public customer_code!: string;
  public measure_datetime!: Date;
  public measure_type!: 'WATER' | 'GAS';
  public measure_value?: number;
  public image_url?: string;
  public has_confirmed!: boolean;
}

Measure.init(
  {
    measure_uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    customer_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    measure_type: {
      type: DataTypes.ENUM('WATER', 'GAS'),
      allowNull: false,
    },
    measure_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    has_confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'measures',
    timestamps: true,
  }
);

export default Measure;