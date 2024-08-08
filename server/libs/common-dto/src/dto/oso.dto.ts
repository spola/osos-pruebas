import {
  IsAlphanumeric,
  IsBoolean,
  IsDate,
  IsEnum,
  IsIP,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { EstadoOso } from './estado-oso.enum';
import { Accion } from './accion.dto';
import { Type } from 'class-transformer';



export class Oso {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsBoolean()
  activo: boolean;

  @IsEnum(EstadoOso)
  estado: EstadoOso;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  machineId: string;

  @IsIP(4)
  ip: string;

  @IsDate()
  inicio?: Date;

  @Type(() => Accion)
  accion?: Accion;
}
