import { Module } from '@nestjs/common';
import { OrquestadorService } from './orquestador.service';
import { OsoLiberadoListener } from './listeners/oso-liberado.listener';
import { OsosModule } from 'src/osos/osos.module';

@Module({
  imports: [OsosModule],
  providers: [OrquestadorService, OsoLiberadoListener]
})
export class OrquestadorModule {}
 