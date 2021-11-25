import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products)
    private productsModel: typeof Products,
  ) {}

  async getAll(): Promise<Products[]> {
    return this.productsModel.findAll();
  }

  async getProductById(id: number): Promise<Products> {
    return this.productsModel.findByPk(id);
  }

  async createProduct(product: Products) {
    this.productsModel.create(product);
  }

  async updateProduct(product: Products): Promise<[number, Products[]]> {
    return this.productsModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }

  async deleteProduct(id: number) {
    const product: Products = await this.getProductById(id);
    product.destroy();
  }
}
