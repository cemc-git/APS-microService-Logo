import { Controller, Get, Logger } from '@nestjs/common';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateLogoDto } from './dto/create-logo.dto';
import { Logo } from './entities/logo.entity';
import { DescricaoCompletaDto } from './dto/descricao-completa';
import { LogoService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: LogoService) {}

  //private readonly logger = new Logger(AppController.name);

 
  @MessagePattern('create-logo')
  async create(data: DescricaoCompletaDto) {
    return this.appService.preCadastro(data);
  }
  @MessagePattern('get-all')
  async criar(@Payload() login: string): Promise<any> {
    
    return this.appService.getAll(login);
  } 
}
