import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { OsosModule } from './osos/osos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { AccionesModule } from './acciones/acciones.module';

@Module({
  imports: [OsosModule, NotificacionesModule, AccionesModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
