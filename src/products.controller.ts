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

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('P001', 'Iphone 13', 150),
    new Product('P002', 'Samsung Galaxy', 90),
    new Product('P003', 'Motorola X', 50),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getProductById(@Param() params): Product {
    return this.products[1];
  }

  @Post()
  createProduct(@Body() product: Product) {
    product.id = 10;
    this.products.push(product);
  }

  @Put()
  updateProduct(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  deleteProduct(@Param() params) {
    this.products.pop();
  }
}
