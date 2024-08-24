import { Test, TestingModule } from '@nestjs/testing';
import { OsosController } from './osos.controller';
import { OsosService } from './osos.service';
import { OsosGateway } from './osos.gateway';
import { EstadoOso, Oso } from '@aaa/common-dto';

describe('OsosController', () => {
  let controller: OsosController;
  let service: OsosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsosController],
      providers: [
        {
          provide: OsosService,
          useValue: {
            seed: jest.fn().mockReturnValue([]),
            getAll: jest.fn().mockReturnValue([])
          }
        }
      ]
    }).compile();

    controller = module.get<OsosController>(OsosController);
    service = module.get<OsosService>(OsosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should been called all methods", () => {
    expect(controller.seed()).toBeDefined();
    expect(controller.list()).toBeDefined();
  });

  it('should been seed', () => {
    jest.spyOn(service, "seed").mockReturnValueOnce([]);
    expect(service.seed()).toStrictEqual([]);

    expect(service.seed).toHaveBeenCalledTimes(1);
  })

  it("should been list the osos", () => {

    let osos = [{
      activo: true,
      estado: EstadoOso.Idle,
      id: 1000,
      ip: "127.0.0.1",
      machineId: "asdf-asdf-asdf-adff",
      accion: null,
      inicio: new Date(2024, 8, 23, 20, 10, 30, 40)
    }] as Oso[];

    jest.spyOn(service, 'getAll').mockReturnValue(osos);

    expect(controller.list()).toStrictEqual([{
      ...osos[0],
      horaInicio: "20:10:30"
    }]);
    expect(service.getAll).toHaveBeenCalledTimes(1);
  })
});
