import { PrismaService } from "src/database/PrismaService";
import { CreateLogoDto } from "src/dto/create-logo.dto";



class RepositorioLogo {
    private prisma: PrismaService

    constructor(
        prisma: PrismaService
        ) {this.prisma= prisma}

    async cadastrarLogo(data: CreateLogoDto) {
        return await this.prisma.repositorioLogo.create({
            data
          })
    }
    async getAllLogo(data: any){
         const resp = await this.prisma.repositorioLogo.findMany({
            where: {
                loginCliente: data.loginCliente
            }
        })
        console.log(resp)
        return resp
    }
}


export default RepositorioLogo;