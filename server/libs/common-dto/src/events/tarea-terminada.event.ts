import { Accion, Oso } from "../dto";
import { TareaDTO } from "../dto/tarea.dto";

export const TAREA_TERMINADA = "tarea.terminada";

export class TareaTerminadaEvent {
    constructor({ tarea }: Partial<TareaTerminadaEvent>) {
        this.tarea = tarea;
    }

    tarea: TareaDTO;
}