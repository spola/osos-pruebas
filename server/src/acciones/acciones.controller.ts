import { Controller, Get } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { TareaDTO } from '../../libs/common-dto/src/dto/tarea.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("acciones")
@Controller('acciones')
export class AccionesController {
  constructor(private readonly accionesService: AccionesService) { }

  /**
   *  Entrega una lista de las tareas registradas
   * @returns TareaDTO[]
   */
  @Get()
  getAll(): TareaDTO[] {
    return this.accionesService.getAll();
  }
}
