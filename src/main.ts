import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { FirebaseService } from './providers/Firebase.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // FirebaseService.initAdmin()
  // await app.listen(process.env.PORT || 3000);
  await app.listen(8000);
}
bootstrap();
