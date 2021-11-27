import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAll(): Promise<Products[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  async getProductById(@Param() params): Promise<Products> {
    return this.productService.getProductById(params.id);
  }

  @Post()
  async createProduct(@Body() product: Products) {
    product.id = 100;
    this.productService.createProduct(product);
  }

  @Put()
  async updateProduct(
    @Body() product: Products,
  ): Promise<[number, Products[]]> {
    return this.productService.updateProduct(product);
  }

  @Delete(':id')
  async deleteProduct(@Param() params) {
    this.productService.deleteProduct(params.id);
  }
}
