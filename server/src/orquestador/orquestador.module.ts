import { Module } from '@nestjs/common';
import { OrquestadorService } from './orquestador.service';
import { OsoLiberadoListener } from './listeners/oso-liberado.listener';
import { OsosModule } from '../osos/osos.module';
import { AccionesModule } from '../acciones/acciones.module';
import { TareaCreadaListener } from './listeners/tarea-creada.listener';

@Module({
  imports: [OsosModule, AccionesModule],
  providers: [OrquestadorService, OsoLiberadoListener, TareaCreadaListener]
})
export class OrquestadorModule {}
 