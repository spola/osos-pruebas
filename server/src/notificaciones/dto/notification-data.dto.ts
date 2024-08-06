import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * La data de la notificación.
 */
export class NotificationData {
    /**
   * Pasillo
   *
   * @example 365
   */
    @IsNumber()
    aisle: number;

    /**
     * Producto
     * @example 987654321
     */
    @IsNotEmpty()
    lpn: string;

    /**
     * Ubicación
     *
     * @example 301-62-1-2
     */
    @IsString()
    @Expose({ name: "Location" })
    location: number;
}