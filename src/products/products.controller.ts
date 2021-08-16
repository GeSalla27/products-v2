import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Put,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    async findAll() {
		throw new Error('Erro de teste');
        return this.productsService.findAll();
    }

	@Get("getName/:name")
    async findName(@Param("name") name: string) {
        return this.productsService.findName(name);
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.productsService.findOne(+id);
    }

    @Put("")
    async update(
        @Param("id") id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productsService.update(
            updateProductDto.id,
            updateProductDto
        );
    }

    @Patch(":id")
    async updatePatch(
        @Param("id") id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productsService.update(+id, updateProductDto);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.productsService.remove(+id);
    }
}
