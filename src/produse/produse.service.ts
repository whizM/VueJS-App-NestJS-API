import { BadRequestException, Header, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { copyFileSync } from 'fs';
import { Model } from 'mongoose';
import { Product } from './produse.model'

@Injectable()
export class ProduseService {
    constructor(@InjectModel('Produs') private readonly produsModel: Model<Product>){}

    async addProduct(product: Product){
        const newProduct = await new this.produsModel(product).save();

        return newProduct;
    }

    async editProduct(id: string, product: Product){
        const editedProduct = await this.findProductById(id);

        const values = Object.values(product);

        if(values.includes("")){
            throw new BadRequestException("Product cannot have empty values");
        }

        Object.assign(editedProduct, product);

        await editedProduct.save();

        return editedProduct;
    }

    async deleteProduct(id: string){
        const deletedProduct = await this.findProductById(id);

        deletedProduct.isDeleted = true;
        await deletedProduct.save();

        if(!deletedProduct){
            throw new NotFoundException('Product not found');
        }

        return deletedProduct;
    }

    async getProducts(){
        const products = await this.produsModel.find({});

        return products;
    }

    private async findProductById(id: String): Promise<Product>{
        let product;

        try {
            product = await this.produsModel.findById(id);
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        }

        if (!product) {
            throw new NotFoundException('Could not find product.');
          }

        return product;
    }
}
