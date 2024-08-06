import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { OsosModule } from './osos/osos.module';
import { AccionesModule } from './acciones/acciones.module';
import { OrquestadorModule } from './orquestador/orquestador.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot(), OsosModule, NotificacionesModule, AccionesModule, OrquestadorModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule { }
