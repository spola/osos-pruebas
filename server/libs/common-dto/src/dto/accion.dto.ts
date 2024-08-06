import { EstadoOso } from "@aaa/common-dto"

export class Accion {
    constructor({ tarea, movimiento, ubicacion, osoId }: Partial<Accion>) {
        this.tarea = tarea;
        this.movimiento = movimiento;
        this.ubicacion = ubicacion;
        this.osoId = osoId;
    }

    tarea: string;

    movimiento: EstadoOso;

    ubicacion?: string;

    osoId: number;
}