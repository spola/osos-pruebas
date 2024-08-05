/* eslint-disable */
export default async () => {
    const t = {
        ["../libs/common-dto/src/dto/oso.dto"]: await import("../libs/common-dto/src/dto/oso.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./notificaciones/dto/create-notificacione.dto"), { "CreateNotificacioneDto": { aisle: { required: true, type: () => Number, description: "Pasillo", example: 365 }, ilpn: { required: true, type: () => String, description: "Producto", example: "987654321" } } }], [import("./notificaciones/dto/update-notificacione.dto"), { "UpdateNotificacioneDto": {} }], [import("./notificaciones/entities/notificacione.entity"), { "Notificacione": {} }], [import("../libs/common-dto/src/dto/oso.dto"), { "Oso": { id: { required: true, type: () => Number, minimum: 1 }, activo: { required: true, type: () => Boolean }, machineId: { required: true, type: () => String }, ip: { required: true, type: () => String } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./notificaciones/notificaciones.controller"), { "NotificacionesController": { "create": { type: String } } }]] } };
};