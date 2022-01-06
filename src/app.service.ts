import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    console.log(
      `API_KEY: ${this.configService.apiKey}, DATABASE_NAME: ${this.configService.database.name}`,
    );

    return 'Hello World!';
  }
}
