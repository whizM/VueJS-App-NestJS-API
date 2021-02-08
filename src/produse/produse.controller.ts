import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './produse.model';
import { ProduseService } from './produse.service';

@Controller('produse')
export class ProduseController {
    constructor(private readonly productService: ProduseService){}
    
    @Post()
    async addProduct(@Body('product') product: Product){
        const newProduct = await this.productService.addProduct(product);

        return newProduct;
    }

    @Put(":productId")
    async editProduct(@Param('productId') productId, @Body('product') product: Product){
        const editedProduct = await this.productService.editProduct(productId, product);

        return editedProduct;
    }

    @Delete(":productId")
    async deleteProduct(@Param('productId') productId){
        const deletedProduct = await this.productService.deleteProduct(productId);

        return deletedProduct;
    }

    @Get("/count/:elemPerPage")
    async getNumberOfPages(@Param('elemPerPage') elemPerPage){
        const numberOfElements = await this.productService.count()

        return  numberOfElements % elemPerPage === 0 ? 
                numberOfElements / elemPerPage : 
                Math.floor(numberOfElements / elemPerPage) + 1;
    }

    @Get(":limit/:skip")
    async getProducts(@Param('limit') limit, @Param('skip') skip){
        const products = await this.productService.getProducts(limit, skip);

        return products;
    }
}
