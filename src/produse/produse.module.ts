import { Module } from '@nestjs/common';
import { ProduseController } from './produse.controller';
import { ProduseService } from './produse.service';

@Module({
  controllers: [ProduseController],
  providers: [ProduseService]
})
export class ProduseModule {}
