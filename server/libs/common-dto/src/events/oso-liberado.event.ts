export const OSO_LIBERADO = "oso.liberado";
export class OsoLiberadoEvent {
    constructor({ id }: Partial<OsoLiberadoEvent>) {
        this.id = id;
    }

    id: number;
}