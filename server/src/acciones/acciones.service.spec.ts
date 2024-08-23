import { Test, TestingModule } from '@nestjs/testing';
import { AccionesService } from './acciones.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('AccionesService', () => {
  let service: AccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccionesService,
      ],
      imports: [
        EventEmitterModule.forRoot(),
      ]
    }).compile();

    service = module.get<AccionesService>(AccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty task', () => {
    let tareas = service.getAll();
    expect(tareas).toBeDefined();
    expect(tareas).toHaveLength(0);
  })

  it('should return no next task', () => {
    let tarea = service.siguienteTareaDisponible();
    expect(tarea).not.toBeDefined();
  })

  it("Should return next task", () => {
    service.handleCron();
    expect(service.getAll()).toHaveLength(1);
    expect(service.siguienteTareaDisponible()).toBeDefined();

  })
});
