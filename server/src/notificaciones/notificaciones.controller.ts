import { Body, Controller, Post } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionRequestDTO } from './dto/notificacion-request.dto';

@Controller('notificaciones')
export class NotificacionesController {
    constructor(
        private readonly service: NotificacionesService
    ) { }

    @Post()
    recibir(@Body() dto: NotificacionRequestDTO) {
        console.info(dto);
    }
}
