import { Accion, Oso } from "../dto";
import { TareaDTO } from "../dto/tarea.dto";

export const ACCION_ASIGNADA = "accion.asignada";

export class AccionAsignadaEvent {
    constructor({ accion, oso, tarea }: Partial<AccionAsignadaEvent>) {
        this.accion = accion;
        this.oso = oso;
        this.tarea = tarea;
    }

    accion: Accion;
    oso: Oso;
    tarea: TareaDTO;
}