import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificacioneDTO } from './create-notificacion.dto';

export class UpdateNotificacioneDto extends PartialType(CreateNotificacioneDTO) {}
