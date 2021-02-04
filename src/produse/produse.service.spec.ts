import { Test, TestingModule } from '@nestjs/testing';
import { ProduseService } from './produse.service';

describe('ProduseService', () => {
  let service: ProduseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduseService],
    }).compile();

    service = module.get<ProduseService>(ProduseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
