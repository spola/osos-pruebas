export enum EstadoTarea {
    Ingresado,
    Procesando,
    Terminado
}

export class TareaDTO {
    constructor(attr: Partial<TareaDTO>) {
        Object.assign(this, attr)
    }

    codigo: number;
    estado: EstadoTarea;
    pln: string;
    origen: string;
    destino: string;
}