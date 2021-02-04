import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduseModule } from './produse/produse.module';

@Module({
  imports: [ProduseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
