import { Oso } from '@aaa/common-dto';
import { Logger } from '@nestjs/common';
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
}
