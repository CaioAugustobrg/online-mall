import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }
  async createOrUpdate(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }
  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
  findByIds(ids: string[]): Promise<Product[]> {
    return this.productsRepository.findByIds(ids);
  }
}
