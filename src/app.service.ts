import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello kittky significa hola';
  }

}


