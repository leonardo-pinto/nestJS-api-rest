import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('P001', 'Iphone 13', 150),
    new Product('P002', 'Samsung Galaxy', 90),
    new Product('P003', 'Motorola X', 50),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products[1];
  }

  createProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: Product): Product {
    return product;
  }

  deleteProduct(id: number) {
    this.products.pop();
  }
}
