import { Controller, Get } from '@nestjs/common';
import { ExternalDataService } from '../service/external-data.service';

@Controller('externalData')
export class ExternalDataController {
  constructor(private readonly externalDataService: ExternalDataService) {}

  @Get()
  getExternalData(): unknown {
    return this.externalDataService.getExternalData();
  }
}
