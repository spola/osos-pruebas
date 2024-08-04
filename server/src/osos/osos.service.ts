import { Injectable, Logger } from '@nestjs/common';
import { OsosGateway } from './osos.gateway';
import { Oso } from './dto/oso.dto';

let osos: Oso[] = [];
for (let i = 0; i < 14; i++) {
    osos.push(new Oso({
        id: i,
        activo: Math.random() > 0.3,

        machineId: "codigo_" + i, //TODO: Fake a este dato
        ip: "192.168.2." + i //TODO: Fake a este dato
    }))
}

@Injectable()
export class OsosService {
    private readonly logger = new Logger(OsosService.name);

    constructor(
        private readonly gateways: OsosGateway
    ) { }

    findOsoDesocupado () : Oso | null{

        //TODO terminar
        return osos.find(v => v.activo );
    }

    handleCron() {
        this.logger.debug('Called every 10 seconds');
        this.gateways.osoUpdated({
            id: 11,
            ubicacion: "26.1.1.2",
            inicio: new Date(),
            tipo: "load",
            ilpn: 111222333,
            activo: Math.random() > 0.5
        } as Oso);
    }


}
