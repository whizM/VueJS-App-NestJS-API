import { Header } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './produse.model';
import { ProduseService } from './produse.service';

@Controller('produse')
export class ProduseController {
    constructor(private readonly productService: ProduseService){}
    
    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    @Header('Access-Control-Allow-Methods', 'POST')
    async addProduct(@Body('product') product: Product){
        const newProduct = await this.productService.addProduct(product);

        return newProduct;
    }

    @Put(":productId")
    @Header('Access-Control-Allow-Origin', '*')
    async editProduct(@Body('product') product: Product, @Param('productId') productId){
        const editedProduct = await this.productService.editProduct(productId, product);

        return editedProduct;
    }

    @Delete(":productId")
    @Header('Access-Control-Allow-Origin', '*')
    async deleteProduct(@Param('productId') productId){
        const deletedProduct = await this.productService.deleteProduct(productId);

        return deletedProduct;
    }

    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    async getProducts(){
        const products = await this.productService.getProducts();

        return products;
    }
}
