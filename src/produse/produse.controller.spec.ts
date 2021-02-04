import { Test, TestingModule } from '@nestjs/testing';
import { ProduseController } from './produse.controller';

describe('ProduseController', () => {
  let controller: ProduseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduseController],
    }).compile();

    controller = module.get<ProduseController>(ProduseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
