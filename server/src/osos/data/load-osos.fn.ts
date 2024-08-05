import { Oso } from '@aaa/common-dto';
import { plainToInstance } from 'class-transformer';

export function loadOsos(): Oso[] {
  let ososJson = require('./osos.json');

  let osos = ososJson.map((oj) => plainToInstance(Oso, oj));

  return osos;
}
