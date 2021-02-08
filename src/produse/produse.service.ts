import { BadRequestException, Header, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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

    async getProducts(limit: string, skip: string){
        let products;
        let numLimit;

        if( typeof limit === "string" && typeof skip === "string"){
            numLimit = parseInt(limit);
            const numSkip = parseInt(skip);

            products = await this.produsModel.find({isDeleted: false}).skip(numSkip).limit(numLimit);
        } else if (typeof limit === "string") {
            numLimit = parseInt(limit);
            products = await this.produsModel.find({isDeleted: false}).limit(numLimit);
        } else {
            products = await this.produsModel.find({isDeleted: false}).limit(10);
        }

        return products;
    }

    async count(){
        return await this.produsModel.countDocuments({isDeleted: false});
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
