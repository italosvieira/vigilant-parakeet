import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExternalDataService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getExternalData(): Promise<unknown> {
    return (
      await firstValueFrom(
        this.httpService.get(this.configService.get('EXTERNAL_DATA_URL')),
      )
    ).data;
  }
}
