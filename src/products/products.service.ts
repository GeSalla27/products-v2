import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product
    ) {}

    async create(createProductDto: CreateProductDto) {
		return this.productModel.create(createProductDto)
    }

    async findAll() {
        return this.productModel.findAll();
    }

    async findOne(id: number) {
        return this.productModel.findByPk(id);
    }

    async update(
        id: number,
        updateProductDto: UpdateProductDto
    ): Promise<[number, Product[]]> {
        return this.productModel.update(updateProductDto, {
            where: { id: id },
        });
    }

    async remove(id: number) {
        const product: Product = await this.findOne(id);
        product.destroy();
    }
}
