export type MovementType = "load" | "unload" | "movement" | "charge";

export class Oso {
    constructor(attr: Partial<Oso>) {
        Object.assign(this, attr)
    }

    id: number;
    ubicacion: string;
    inicio: Date;
    tipo: MovementType;
    ilpn: number;
    activo: boolean;

    machineId: string;
    ip: string;
}