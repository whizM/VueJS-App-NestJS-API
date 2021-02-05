import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProduseModule } from './produse/produse.module';

import { ConfigModule } from 'nestjs-dotenv';
import { ConfigService } from 'nestjs-dotenv';

@Module({
  imports:  [
            MongooseModule.forRoot(process.env.MONGO_DB_URL),
            ConfigModule.forRoot(),
            ProduseModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly configService: ConfigService
) {}
}
