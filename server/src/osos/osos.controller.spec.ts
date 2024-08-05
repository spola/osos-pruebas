import { Test, TestingModule } from '@nestjs/testing';
import { OsosController } from './osos.controller';
import { OsosService } from './osos.service';

describe('OsosController', () => {
  let controller: OsosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsosController],
      providers: [OsosService],
    }).compile();

    controller = module.get<OsosController>(OsosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
