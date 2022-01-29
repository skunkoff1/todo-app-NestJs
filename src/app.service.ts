import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World ! Let's go !`;
  }

  getMyName(): string {
    return `Hello Skunkoff`;
  }
}
