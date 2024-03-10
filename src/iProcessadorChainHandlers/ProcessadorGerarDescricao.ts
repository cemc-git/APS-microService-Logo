
import FachadaComunicacaoT2T from '../apis/fachadaComunicacaoT2T';
import IProcessadorChain from '../interfaces/IProcessadorChain';
import ProcessadorGerarImagemLogo from './ProcessadorGerarImagemLogo';

class GerarDescricaoGpt  implements IProcessadorChain {
  next: IProcessadorChain;



  setNext(processador: IProcessadorChain): void {
    this.next = processador;
  }


  async handler(prompt: string): Promise<any>  {

    console.log("IniciogerarDescricao")


    let fachadaComunicacaoT2T = new FachadaComunicacaoT2T ()
    let promptRefinado = await fachadaComunicacaoT2T.obterPromptIA(prompt)
    console.log("chegou os dados", promptRefinado)

    this.setNext(new ProcessadorGerarImagemLogo())
    return this.next.handler(promptRefinado);

    
   

  }


}
  
  
export default GerarDescricaoGpt;


  
