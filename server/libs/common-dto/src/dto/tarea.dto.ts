export enum EstadoTarea {
    Ingresado = "ingresado",
    Procesando = "procesado",
    Terminado = "terminado"
}

export class TareaDTO {
    constructor(attr: Partial<TareaDTO>) {
        Object.assign(this, attr)
    }

    codigo: string;
    estado: EstadoTarea;
    pln: string;
    origen: string;
    destino: string;

    etapa?: number;
}