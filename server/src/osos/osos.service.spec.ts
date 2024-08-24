import 'jest-chain';
import { Test, TestingModule } from '@nestjs/testing';
import { OsosService } from './osos.service';
import { OsosGateway } from './osos.gateway';
import { EstadoOso, Oso } from '@aaa/common-dto';

describe('OsosService', () => {
  let service: OsosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OsosService,
        {
          provide: OsosGateway,
          useValue: {}
        }
      ],
    }).compile();

    service = module.get<OsosService>(OsosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findOsoDesocupado', () => {
    expect(service.findOsoDesocupado())
      .toBeDefined()
      .toBeInstanceOf(Oso)
      .toHaveProperty("activo", true)
      .toHaveProperty("estado", EstadoOso.Idle);
  });

  describe('should findByMachineId', () => {
    it('find a bear', () =>{
      expect(service.findByMachineId("3eccfd7d-cfb9-4ddb-a640-c771ddfb4934")).toBeDefined();
    })
    it('not find a bear', () =>{
      expect(service.findByMachineId("no-found")).not.toBeDefined();
    })
  })

  describe('should findOso', () => {
    it('find a bear', () =>{
      expect(service.findOso(1)).toBeDefined();
    })
    it('not find a bear', () =>{
      expect(service.findOso(-100)).not.toBeDefined();
    })
  });

  describe('should reservarOso', () => {
    it('reserve a bear', () =>{
      expect(service.reservarOso(1))
        .toBeDefined()
        .toHaveProperty('estado', EstadoOso.Reserved);
    })
    it('not reserve a bear', () =>{
      expect(service.reservarOso(-100)).not.toBeDefined();
    })
  });

  it('should getAll', () => {
    expect(service.getAll())
      .toBeDefined()
      .toHaveLength(15);
  });

  it('should seed', () => {
    expect(service.seed())
      .toBeDefined()
      .toHaveLength(15);
  });
});
