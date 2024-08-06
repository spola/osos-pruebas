import { TareaDTO } from "../dto/tarea.dto";

export const TAREA_CREADA = "tarea.creada";

export class TareaCreadaEvent {
    tarea: TareaDTO;
}