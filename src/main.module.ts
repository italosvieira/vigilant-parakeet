import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExternalDataController } from './controller/external-data.controller';
import { ExternalDataService } from './service/external-data.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('HTTP_MODULE_BASE_URL'),
        headers: {
          Accept: configService.get('HTTP_MODULE_HEADER_ACCEPT'),
        },
      }),
    }),
  ],
  controllers: [AppController, ExternalDataController],
  providers: [AppService, ExternalDataService],
})
export class MainModule {}
