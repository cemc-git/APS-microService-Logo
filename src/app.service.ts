import { Injectable } from '@nestjs/common';
import { CreateLogoDto } from './dto/create-logo.dto';
import { PrismaService } from 'src/database/PrismaService';
import RepositorioLogo from 'src/repositorios/repositorio-logo';
import { DescricaoCompletaDto } from './dto/descricao-completa';
import ProcessadorConverterFormulario from './iProcessadorChainHandlers/ProcessadorConverterFormulario';
import GerarDescricaoGpt from './iProcessadorChainHandlers/ProcessadorGerarDescricao';

@Injectable()
export class LogoService {
  repo: RepositorioLogo;
  constructor(
    private prisma: PrismaService
    ) {
      this.repo = new RepositorioLogo(prisma)
    }

    async cadastrarLogo(data: CreateLogoDto) {
      const logo = await this.repo.cadastrarLogo(
        data
      )
      return logo;
    }

    async preCadastro( data: DescricaoCompletaDto) {

      let handler_1 = new ProcessadorConverterFormulario ()
      handler_1.setNext(new GerarDescricaoGpt())
      let stringFormulario = data.tipoOrganizacao+"##"+data.ramoAtuacao+"##"+data.diferenciais;
      if (data.cores) {
        stringFormulario=stringFormulario+"##"+data.cores;
      }
      if (data.elementos) {
        stringFormulario=stringFormulario+"##"+data.elementos;
      }
      let img = await handler_1.handler(stringFormulario)

      const logoAux: CreateLogoDto = {
        imagem:  "img",
        loginCliente: 'data.cliente'
     }

      const logo = await this.cadastrarLogo(logoAux);
      return img
    }
    async getAll(login: string){
      const logos = await this.repo.getAllLogo(login)
      return logos
    }
}