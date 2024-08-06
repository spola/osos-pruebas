import { Expose, Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';
import { NotificationType } from './notification-type.enum';
import { NotificationData } from './notification-data.dto';

export class CreateNotificacioneDTO {

  /**
   * Momento que se crea la notificación
   */
  @IsDateString()
  timestamp: Date;

  /**
   * Identificador de la máquina
   * @example 905042d0-d398-4826-a262-eae71cda6739
   */
  @IsString()
  @IsNotEmpty()
  // @Matches(/^[\w\d]{8}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{12}$/)
  @IsUUID('4')
  // @Expose({ name: 'machine_id' })
  machine_id: string;

  /**
   * Tipo de notificación.
   * @example: movement
   */
  @IsEnum(NotificationType)
  // @Expose({ name: "notification_type" })
  notification_type: NotificationType;


  /**
   * La data asociada a la notificación recibida
   */
  // @Expose({ name: "notification_data" })
  @Type(() => NotificationData)
  notification_data: NotificationData

}
