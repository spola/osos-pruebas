import { Test, TestingModule } from '@nestjs/testing';
import { OsosGateway } from './osos.gateway';

describe('OsosGateway', () => {
  let gateway: OsosGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OsosGateway],
    }).compile();

    gateway = module.get<OsosGateway>(OsosGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
