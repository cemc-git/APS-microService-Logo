import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { LogoModule } from './app.module';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(LogoModule,
    {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'logo',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'logo-consumer',
        allowAutoTopicCreation: true
      }
    }
  });
  await app
    .listen()
    .then(() => logger.log('logo-engine is running'))
    .catch((err) => logger.log(err));
}
bootstrap();
