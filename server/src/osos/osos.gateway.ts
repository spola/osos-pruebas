import { ACCION_ASIGNADA, AccionAsignadaEvent, Oso, TAREA_CREADA, TareaCreadaEvent } from '@aaa/common-dto';
import { Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

@WebSocketGateway()
export class OsosGateway {

  private readonly logger = new Logger(OsosGateway.name);

  @WebSocketServer()
  private readonly server: Server;

  constructor() { }


  public osoUpdated(oso: Oso) {
    this.logger.debug(`Actualizando el oso ${oso.id}`);
    this.server.emit("oso-updated", {
      ...oso,
      inicio: formatter.format(oso.inicio),
    });
  }

  @OnEvent(ACCION_ASIGNADA)
  public onAccionAsignada(payload: AccionAsignadaEvent) {
    this.logger.debug(`onAccionAsignada ${payload.oso.id}`);
    this.server.emit("accion-asignada", {
      tarea: payload.tarea
    });

    this.server.emit("oso-updated", {
      oso: {
        ...payload.oso,
        horaInicio: formatter.format(payload.oso.inicio),
      },
      accion: payload.accion
    });
  }

  @OnEvent(TAREA_CREADA)
  public onTareaCreada(payload: TareaCreadaEvent) {
    this.logger.debug(`onTareaCreada ${payload.tarea.codigo}`);
    this.server.emit("accion-creada", payload);
  }
}
