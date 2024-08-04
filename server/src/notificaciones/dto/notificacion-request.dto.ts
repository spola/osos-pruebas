import { Expose, Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NotificacionRequestDataDTO {
    @IsNotEmpty()
    @IsString()
    lpn: string;

    @IsNumber({ allowNaN: false, allowInfinity: false })
    aisle: number;

    @IsNotEmpty()
    @IsString()
    location: string;
}
export class NotificacionRequestDTO {
    @IsDateString()
    @IsNotEmpty()
    timestamp: Date;

    @IsNotEmpty()
    @IsString()
    @Expose({ name: 'machine_id' })
    machineId: string;

    @IsNotEmpty()
    @IsString()
    @Expose({ name: 'notification_type' })
    notificationType: "movement" | "load" | "unload";

    @Type(() => NotificacionRequestDataDTO)
    @Expose({ name: 'notification_data' })
    notificationData: NotificacionRequestDataDTO;
}