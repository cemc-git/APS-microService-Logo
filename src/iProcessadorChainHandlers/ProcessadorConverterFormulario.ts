import IProcessadorChain from "../interfaces/IProcessadorChain";


class ProcessadorConverterFormulario implements IProcessadorChain {
    next: IProcessadorChain;

   /* constructor(){
        this.next = null;
        }*/

    setNext(processador: IProcessadorChain): void {
        this.next = processador;
    }

    async handler(data: string): Promise<any>  {
        //DescricaoSimples (tipoOrganizacao, ramoAtuacao, diferenciais)
        //DescricaoCompleta (tipoOrganizacao, ramoAtuacao, diferenciais, coresLogo, elementosLogo)
        let temp:string[] = data.split('##');
        let prompt;
        
        if(temp.length==3){
            //descricao simples
            prompt = `Imagine e descreva a aparência, com no máximo 250 caracteres, uma logo para uma ${temp[0]} que faz ${temp[1]} de caracteristica ${temp[2]}. Descreva apenas a imagem em inglês, sem mencionar textos`;
        } else {
            //descricao completa
            prompt = `Imagine e descreva a aparência, com no máximo 250 caracteres, uma logo para uma ${temp[0]} que faz ${temp[1]} de caracteristica ${temp[2]} contendo tanto ${temp[3]} quanto as cor/cores ${temp[4]}. Descreva apenas a imagem em inglês, sem mencionar textos`;

        }

        return this.next.handler(prompt);
    }
    
}


export default ProcessadorConverterFormulario;