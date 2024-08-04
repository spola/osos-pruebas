import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EstadoTarea, TareaDTO } from './dto/tarea.dto';

const tareas: TareaDTO[] = [];


@Injectable()
export class AccionesService {

    private readonly logger = new Logger(AccionesService.name);


    @Cron(CronExpression.EVERY_10_SECONDS)
    handleCron() {
        this.logger.debug('Called every 10 seconds');

        //TODO : Meter tareas aleatorias
        //TODO: con datos aleatorios
        tareas.push(new TareaDTO({
            codigo: 1234567,
            estado: EstadoTarea.Ingresado,
            pln: "123456",
            origen: "123.1.1.2",
            destino: "321.2.2.1"
        }));

        //TODO: Emitir evento de tarea creada
    }
}
