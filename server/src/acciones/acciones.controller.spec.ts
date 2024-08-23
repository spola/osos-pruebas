import { Test, TestingModule } from '@nestjs/testing';
import { AccionesController } from './acciones.controller';
import { AccionesService } from './acciones.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('AccionesController', () => {
  let controller: AccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccionesController],
      providers: [AccionesService],
      imports: [
        EventEmitterModule.forRoot(),
      ]
    }).compile();

    controller = module.get<AccionesController>(AccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
