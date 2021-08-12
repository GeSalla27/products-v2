import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CreateProductDto } from '../dto/create-product.dto';

@Table
export class Product extends Model<CreateProductDto> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;
}
