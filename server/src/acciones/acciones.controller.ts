import { Controller } from '@nestjs/common';
import { AccionesService } from './acciones.service';

@Controller('acciones')
export class AccionesController {
  constructor(private readonly accionesService: AccionesService) {}
}
