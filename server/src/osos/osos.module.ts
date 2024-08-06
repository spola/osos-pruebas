import { Module } from '@nestjs/common';
import { OsosGateway } from './osos.gateway';
import { OsosService } from './osos.service';
import { OsosController } from './osos.controller';

@Module({
  imports: [
  ],
  exports: [OsosService],
  providers: [OsosGateway, OsosService],
  controllers: [OsosController]
})
export class OsosModule { }
