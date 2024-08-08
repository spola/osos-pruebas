import { Injectable, Logger } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { OsosService } from "../../osos/osos.service";
import { AccionesService } from "../../acciones/acciones.service";
import { ACCION_ASIGNADA, AccionAsignadaEvent, OSO_LIBERADO, OsoLiberadoEvent } from "@aaa/common-dto";

@Injectable()
export class OsoLiberadoListener {

    private readonly logger = new Logger(OsoLiberadoListener.name);

    constructor(
        private readonly osoService: OsosService,
        private readonly accionesService: AccionesService,
        private readonly eventEmitter: EventEmitter2
    ) { }

    @OnEvent(OSO_LIBERADO)
    handleOrderCreatedEvent(payload: OsoLiberadoEvent) {
        // handle and process "OrderCreatedEvent" event

        this.logger.debug("Oso liberado " + payload.id);

        this.logger.debug("(1) Marcar oso como reservado");
        let oso = this.osoService.reservarOso(payload.id);

        this.logger.debug("(2) Buscar siguiente acción");
        let res = this.accionesService.siguienteAccion(oso);

        this.logger.debug("(3) Asignar acción");

        this.logger.debug("(4) Notificar despacho")

        this.eventEmitter.emitAsync(ACCION_ASIGNADA, new AccionAsignadaEvent({
            accion: res.accion,
            oso: oso,
            tarea: res.tarea
        }));
    }
}