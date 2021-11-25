import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getProductById(@Param() params): Product {
    return this.productService.getProductById(params.id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    product.id = 10;
    this.productService.createProduct(product);
  }

  @Put()
  updateProduct(@Body() product: Product): Product {
    return this.productService.updateProduct(product);
  }

  @Delete(':id')
  deleteProduct(@Param() params) {
    this.productService.deleteProduct(params.id);
  }
}
