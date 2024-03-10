import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {LogoService } from './app.service';
import { PrismaService } from './database/PrismaService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [LogoService, PrismaService],
})
export class LogoModule {}


