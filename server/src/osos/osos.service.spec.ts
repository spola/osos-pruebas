import { Test, TestingModule } from '@nestjs/testing';
import { OsosService } from './osos.service';

describe('OsosService', () => {
  let service: OsosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OsosService],
    }).compile();

    service = module.get<OsosService>(OsosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
