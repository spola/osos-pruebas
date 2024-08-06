import { NotificationData } from "../dto/notification-data.dto";
import { NotificationType } from "../dto/notification-type.enum";

export class Notificacion {
    id: string;
    timestamp: Date;
    machineId: string;
    notificationType: NotificationType;
    notificationData: NotificationData;
}
