import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProduseController } from './produse.controller';
import { ProduseSchema } from './produse.model';
import { ProduseService } from './produse.service';

const model = {
  name: "Produs",
  schema: ProduseSchema
}

@Module({
  imports: [MongooseModule.forFeature([model])],
  controllers: [ProduseController],
  providers: [ProduseService]
})
export class ProduseModule {}
