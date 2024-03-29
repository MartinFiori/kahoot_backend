import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:8080',
        /^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):8080$/,
      ]
    }
  });

  await app.listen(3000);
}
bootstrap();
