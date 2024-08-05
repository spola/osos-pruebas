import { faker } from '@faker-js/faker';
import { EstadoOso, Oso } from '@aaa/common-dto';

export function createRandomOso(): Oso {
  return {
    id: faker.number.int(),

    machineId: faker.string.uuid(),
    ip: faker.internet.ipv4(),

    activo: Math.random() > 0.3,

    estado: EstadoOso.None,

    inicio: new Date()
  };
}

export function createListOsos(): Oso[] {
  faker.seed(111);

  return faker.helpers.multiple(createRandomOso, {
    count: 15,
  });
}
