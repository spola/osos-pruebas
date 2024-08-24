import { Controller, Get } from '@nestjs/common';
import { OsosService } from './osos.service';
import { Oso } from '@aaa/common-dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OsoDTO } from './dto/oso.dto';

const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

@ApiTags('osos')
@Controller('osos')
export class OsosController {
  constructor(private readonly service: OsosService) { }

  @Get('seed')
  @ApiOperation({ description: 'Genera una lista de osos' })
  seed(): Oso[] {
    return this.service.seed();
  }

  @Get()
  @ApiOperation({ description: 'Obtiene la lista de osos' })
  list(): OsoDTO[] {
    return this.service.getAll().map(o => ({
      ...o,
      horaInicio: o.inicio ? formatter.format(o.inicio) : null
    }));
  }
}
