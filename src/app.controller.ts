import { Controller, Get } from '@nestjs/common';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ok')
  getHellow(): string {
    return this.appService.getHello();
  }

  @Get('verify/:token')
  verifyToken(token:string): Promise<DecodedIdToken> {
    return this.appService.verifyToken(token)
  }
}
