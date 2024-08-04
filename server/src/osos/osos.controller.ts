import { Controller, Get } from '@nestjs/common';
import { Oso } from './dto/oso.dto';

const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

@Controller('osos')
export class OsosController {

    @Get()
    list(): any[] {
        let osos = [
            {
                id: 10,
                ubicacion: "140.1.1.2",
                inicio: new Date(),
                tipo: "movimiento",
                ilpn: 111222333,
                activo: true
            },
            {
                id: 11,
                ubicacion: "140.1.1.2",
                inicio: new Date(),
                tipo: "movimiento",
                ilpn: 111222333,
                activo: true
            },
            {
                id: 12,
                ubicacion: "140.1.1.2",
                inicio: new Date(),
                tipo: "movimiento",
                ilpn: 111222333,
                activo: true
            },
            {
                id: 13,
                ubicacion: "140.1.1.2",
                inicio: new Date(),
                tipo: "movimiento",
                ilpn: 111222333,
                activo: true
            },
            {
                id: 14,
                ubicacion: "140.1.1.2",
                inicio: new Date(),
                tipo: "charge",
                ilpn: 111222333,
                activo: false
            },
        ] as Oso[];

        return osos.map(o => ({
            ...o,
            inicio: formatter.format(o.inicio)
        }));
    }
}
