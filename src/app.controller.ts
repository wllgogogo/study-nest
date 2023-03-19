import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const a = 'aaaa';
    console.log(`hello nest  ${a}`);
    console.log('hello 王加国');
    return this.appService.getHello();
  }
}
