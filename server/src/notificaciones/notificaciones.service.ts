import { EstadoOso, OSO_LIBERADO, OsoLiberadoEvent } from '@aaa/common-dto';
import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { randomUUID } from 'crypto';
import { OsosService } from '../osos/osos.service';
import { CreateNotificacioneDTO } from './dto/create-notificacion.dto';
import { Notificacion } from './entities/notificacione.entity';

let notificaciones = [];

@Injectable()
export class NotificacionesService {

  private readonly logger = new Logger(NotificacionesService.name);

  constructor(
    private readonly ososService: OsosService,
    private eventEmitter: EventEmitter2
  ) { }

  async create(createNotificacioneDto: CreateNotificacioneDTO): Promise<Notificacion> {
    this.logger.log("llegó una notificación " + JSON.stringify(createNotificacioneDto));


    let notificacion = {
      id: randomUUID(),
      timestamp: createNotificacioneDto.timestamp,
      machineId: createNotificacioneDto.machine_id,
      notificationData: createNotificacioneDto.notification_data,
      notificationType: createNotificacioneDto.notification_type
    } as Notificacion;

    // (1) Registrar información
    notificaciones.push(notificacion);

    // (2) Actualizar información del oso
    let oso = this.ososService.findByMachineId(notificacion.machineId);

    //TODO Validar que esté el oso y que esté en un estado correcto

    oso.estado = EstadoOso.Idle;

    // (3) Puede seguir
    //TODO Validar que pueda seguir. Por ejemplo si tiene un nivel de batería adecuado

    // (4) Quedó libre
    // (5) Notificar liberación

    this.logger.debug("Emitiendo el evento");
    this.eventEmitter.emitAsync(OSO_LIBERADO, new OsoLiberadoEvent({
      id: oso.id
    }));

    return notificacion;
  }

  getAll(): Notificacion[] {
    return notificaciones;
  }
}
