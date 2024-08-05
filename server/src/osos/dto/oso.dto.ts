import { Oso } from "@aaa/common-dto";
import { IsString } from "class-validator";

export class OsoDTO extends Oso {
    /**
     * La hora de inicio a partir de la fecha de inicio
     * @example 19:40
     */
    @IsString()
    horaInicio?: string;
}