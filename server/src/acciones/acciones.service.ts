import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EstadoTarea, TareaDTO } from '../../libs/common-dto/src/dto/tarea.dto';
import { createFakeTask } from './data/create-task.fn';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Oso, TAREA_CREADA, TareaCreadaEvent } from '@aaa/common-dto';
import { Accion } from '@aaa/common-dto';
import { EstadoOso } from '@aaa/common-dto';

const tareas: TareaDTO[] = [];
const asignaciones: any = {};

@Injectable()
export class AccionesService {

    private readonly logger = new Logger(AccionesService.name);

    constructor(
        private readonly eventEmitter: EventEmitter2
    ) { }


    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
        this.logger.debug('Called every 30 seconds');

        let task = createFakeTask();

        // (1) Registrar nueva tarea
        tareas.push(task);

        // (2) Notificar tarea registrada
        this.eventEmitter.emitAsync(TAREA_CREADA, {
            tarea: task
        } as TareaCreadaEvent)
    }

    siguienteAccion(oso: Oso): { tarea: TareaDTO, accion: Accion } {
        let tarea = asignaciones[oso.id];
        if (!!tarea) {
            tarea.etapa++;
        } else {
            tarea = this.siguienteTareaDisponible();
            if (!tarea) return;



            this.asignarOso(tarea.id, oso);
        }

        let movimiento: EstadoOso;
        if (tarea.etapa == 1) movimiento = EstadoOso.Moving;
        if (tarea.etapa == 2) movimiento = EstadoOso.Load;
        if (tarea.etapa == 3) movimiento = EstadoOso.Moving;
        if (tarea.etapa == 4) movimiento = EstadoOso.Unload;

        return {
            tarea: tarea,
            accion: new Accion({
                movimiento: movimiento,
                osoId: oso.id,
                tarea: tarea.codigo,
                ubicacion: (tarea.etapa == 1 || tarea.etapa == 2) ? tarea.origen : tarea.destino
            })
        };
    }

    asignarOsoTarea(tarea: TareaDTO, oso: Oso): Accion {
        this.asignarOso(tarea.codigo, oso);

        let movimiento: EstadoOso;
        if (tarea.etapa == 1) movimiento = EstadoOso.Moving;
        if (tarea.etapa == 2) movimiento = EstadoOso.Load;
        if (tarea.etapa == 3) movimiento = EstadoOso.Moving;
        if (tarea.etapa == 4) movimiento = EstadoOso.Unload;

        return new Accion({
            movimiento: movimiento,
            osoId: oso.id,
            tarea: tarea.codigo,
            ubicacion: (tarea.etapa == 1 || tarea.etapa == 2) ? tarea.origen : tarea.destino
        });
    }

    private asignarOso(tareaId: string, oso: Oso) {
        let tarea = tareas.find(t => t.codigo == tareaId);
        tarea.estado = EstadoTarea.Procesando;
        tarea.etapa = 1;

        oso.inicio = new Date();

        asignaciones[oso.id] = tarea;

        return true;
    }

    siguienteTareaDisponible(): TareaDTO | undefined {
        return tareas.find(t => t.estado == EstadoTarea.Ingresado);
    }

    public getAll(): TareaDTO[] {
        return tareas;
    }
}
