import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionesService } from './notificaciones.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OsosService } from '../osos/osos.service';
import { OsosModule } from '../osos/osos.module';

describe('NotificacionesService', () => {
  let service: NotificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificacionesService,
        {
          provide: OsosService,
          useValue: {
            findByMachineId: jest.fn()
          }
        }
      ],

      imports: [EventEmitterModule.forRoot(), OsosModule]
    }).compile();

    service = module.get<NotificacionesService>(NotificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
