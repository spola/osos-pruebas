import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { OsosModule } from 'src/osos/osos.module';

@Module({
  imports: [OsosModule],
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
})
export class NotificacionesModule { }
