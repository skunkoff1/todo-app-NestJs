import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4200);
  console.log("L'app est lancée sur le port 4200");
}
bootstrap();
