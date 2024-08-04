import { Test, TestingModule } from '@nestjs/testing';
import { OsosController } from './osos.controller';

describe('OsosController', () => {
  let controller: OsosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsosController],
    }).compile();

    controller = module.get<OsosController>(OsosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
