import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CreateNotificacioneDTO } from './dto/create-notificacion.dto';
import { NotificacionesService } from './notificaciones.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NotificationResponse } from './dto/notification-response.dto';
import { Notificacion } from './entities/notificacione.entity';

@ApiTags('notificaciones')
@Controller('notificaciones')
export class NotificacionesController {
  private readonly logger = new Logger(NotificacionesController.name);
  constructor(
    private readonly notificacionesService: NotificacionesService,
  ) { }

  @Post()
  @ApiOperation({ description: "Recibe las notificaciones desde los osos" })
  //@ApiBody({ type: NotificationResponse })
  // @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.'})
  async create(@Body() createNotificacioneDto: CreateNotificacioneDTO): Promise<NotificationResponse> {
    this.logger.debug(`Llega notificación para la máquina ${createNotificacioneDto.machine_id}`);
    
    let notificacion = await this.notificacionesService.create(createNotificacioneDto);

    return {
      id: notificacion.id,
      timestamp: notificacion.timestamp
    }
  }

  @Get()
  list(): Notificacion[] {
    return this.notificacionesService.getAll();
  }
}
