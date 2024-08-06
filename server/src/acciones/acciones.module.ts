import { Module } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { AccionesController } from './acciones.controller';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  exports: [AccionesService],
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AccionesController],
  providers: [AccionesService],
})
export class AccionesModule { }


/*

Acá vamos a simular la lectura de las tareas desde el WMS y encolarlas.

*/