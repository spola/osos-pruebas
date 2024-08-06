import { IsDate, IsString, IsUUID } from "class-validator";

export class NotificationResponse {

    /**
     * Identificador de la notificación
     */
    @IsString()
    @IsUUID()
    id: string;

    /**
     * Momento que se crea la notificación
     */
    @IsDate()
    timestamp: Date;
}