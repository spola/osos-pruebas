import { EstadoOso, Oso } from '@aaa/common-dto';
import { Injectable, Logger } from '@nestjs/common';
import { createListOsos } from './data/create-osos.faker';
import { loadOsos } from './data/load-osos.fn';
import { OsosGateway } from './osos.gateway';

let osos: Oso[] = loadOsos();

@Injectable()
export class OsosService {
  private readonly logger = new Logger(OsosService.name);

  constructor(
    private readonly gateways: OsosGateway
  ) { }

  findOsoDesocupado(): Oso | null {
    return osos.find(v => v.activo && v.estado == EstadoOso.Idle);
  }

  public findByMachineId(id: string): Oso | undefined {
    return osos.find((oso) => oso.machineId == id);
  }

  public findOso(id: number): Oso | undefined {
    return osos.find((oso) => oso.id == id);
  }

  public reservarOso(id: number): Oso | undefined {
    let oso = this.findOso(id);
    if (!!oso) {
      oso.estado = EstadoOso.Reserved;
    }

    return oso;
  }

  public getAll(): Oso[] {
    return osos;
  }

  public seed(): Oso[] {
    return createListOsos().map((o, i) => {
      o.id = i + 1;
      return o;
    });
  }
}
