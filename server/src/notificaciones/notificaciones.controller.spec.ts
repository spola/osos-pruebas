import { Test, TestingModule } from '@nestjs/testing';
import { NotificacionesController } from './notificaciones.controller';
import { NotificacionesService } from './notificaciones.service';
import { Notificacion } from './entities/notificacione.entity';
import { NotificationType } from './dto/notification-type.enum';
import { CreateNotificacioneDTO } from './dto/create-notificacion.dto';

describe('NotificacionesController', () => {
  let controller: NotificacionesController;
  let service: NotificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacionesController],
      providers: [{
        provide: NotificacionesService,
        useValue: {
          create: jest.fn(),
          getAll: jest.fn()
        }
      }],
    }).compile();

    controller = module.get<NotificacionesController>(NotificacionesController);
    service = module.get<NotificacionesService>(NotificacionesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should return list", () => {
    let data: Notificacion[] = [{
      id: "10",
      machineId: "123-123123-123213-12313",
      notificationType: NotificationType.Load,
      timestamp: new Date(),
      notificationData: null
    }];
    jest.spyOn(service, "getAll").mockReturnValue(data);

    expect(controller.list()).toStrictEqual(data);
  });

  it('should create notification', () => {
    let dto = {
      
      machineId: "123-123456-789789-4569",
      notificationData: null,
      notificationType: NotificationType.Movement,
      timestamp: new Date()
    };
    jest.spyOn(service, "create").mockResolvedValueOnce({
      ...dto,
      id: "5678"
    });
  })
});
