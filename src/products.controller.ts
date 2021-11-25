import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'list all products';
  }

  @Get(':id')
  getProductById(@Param() params): string {
    return `list a product by id -> ${params.id}`;
  }

  @Post()
  createProduct(@Body() product): string {
    return 'product created!';
  }

  @Put()
  updateProduct(@Body() product): string {
    return 'product update!';
  }

  @Delete(':id')
  deleteProduct(@Param() params): string {
    return `deleted product id -> ${params.id}`;
  }
}
