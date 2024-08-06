import { Injectable, Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { OsoLiberadoEvent } from "../events/oso-liberado.event";
import { OsosService } from "src/osos/osos.service";

@Injectable()
export class OsoLiberadoListener {

    private readonly logger = new Logger(OsoLiberadoListener.name);

    constructor(
        private readonly osoService: OsosService,
    ) { }

    @OnEvent("oso.liberado")
    handleOrderCreatedEvent(payload: OsoLiberadoEvent) {
        // handle and process "OrderCreatedEvent" event

        this.logger.debug("Oso liberado " + payload.id);

        // (1) Marcar oso como reservado
        let oso = this.osoService.reservarOso(payload.id);

        // (2) Buscar siguiente actividad


        // (3) Asignar actividad


        // (4) Notificar despacho
    }
}