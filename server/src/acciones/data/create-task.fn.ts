import { faker } from "@faker-js/faker";
import { EstadoTarea, TareaDTO } from "../../../libs/common-dto/src/dto/tarea.dto";

export function createFakeTask(): TareaDTO {
    return {
        codigo: faker.number.bigInt().toString(),
        estado: EstadoTarea.Ingresado,
        pln: faker.number.bigInt().toString(),
        origen: faker.internet.ipv4(),
        destino: faker.internet.ipv4()
    };
};