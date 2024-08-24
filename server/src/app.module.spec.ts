import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

describe('AppModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(AppService)).toBeInstanceOf(AppService);
    expect(module.get(AppController)).toBeInstanceOf(AppController);
  });
});