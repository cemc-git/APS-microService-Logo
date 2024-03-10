import FachadaComunicacaoT2I from "../apis/fachadaComunicacaoT2I";
import IProcessadorChain from "../interfaces/IProcessadorChain";


class ProcessadorGerarImagemLogo implements IProcessadorChain{
    next: IProcessadorChain;

    setNext(processador: IProcessadorChain): void {
        this.next = processador;
    }

    async handler(data: string): Promise<any>  {

        console.log("IniciogerarDescricao")


        let fachadaComunicacaoT2I = new FachadaComunicacaoT2I ()
        let logo = await fachadaComunicacaoT2I.obterImagemIA(data)
        console.log("chegou a imagem", logo)
        if (!this.next) {
            return logo
        }
         return  this.next.handler(logo);
            
        
    }
    
}


export default ProcessadorGerarImagemLogo;