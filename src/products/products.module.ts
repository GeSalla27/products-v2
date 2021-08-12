import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ConfigModule } from '@nestjs/config';
import { Product } from './entities/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER_DATABASE,
      password: process.env.PASSWORD_DATABASE,
      database: 'products',
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
