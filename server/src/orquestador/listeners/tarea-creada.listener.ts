import { Injectable, Logger } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { OsoLiberadoEvent } from "../events/oso-liberado.event";
import { OsosService } from "../../osos/osos.service";
import { AccionesService } from "../../acciones/acciones.service";
import { ACCION_ASIGNADA, AccionAsignadaEvent, TAREA_CREADA, TareaCreadaEvent } from "@aaa/common-dto";

@Injectable()
export class TareaCreadaListener {

    private readonly logger = new Logger(TareaCreadaListener.name);

    constructor(
        private readonly osoService: OsosService,
        private readonly accionesService: AccionesService,
        private readonly eventEmitter: EventEmitter2
    ) { }

    @OnEvent(TAREA_CREADA)
    handleOrderCreatedEvent(payload: TareaCreadaEvent) {
        // handle and process "OrderCreatedEvent" event

        this.logger.debug("tarea creada " + payload.tarea.codigo);

        this.logger.debug("(1) Buscar oso desocupado");
        let oso = this.osoService.findOsoDesocupado();

        if (!oso) {
            //Señal que no hay oso desocupado
            return;
        }

        this.logger.debug("(2) Marcar oso ocupado");
        this.osoService.reservarOso(oso.id);

        this.logger.debug("(3) Asignar acción");
        let accion = this.accionesService.asignarOsoTarea(payload.tarea, oso);

        this.logger.debug("(4) Notificar despacho")

        this.eventEmitter.emitAsync(ACCION_ASIGNADA, new AccionAsignadaEvent({
            accion: accion,
            oso: oso,
            tarea: payload.tarea
        }));
    }
}