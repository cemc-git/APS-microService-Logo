
interface IProcessadorChain {
  
    next: IProcessadorChain;
    
    setNext(processador: IProcessadorChain): void;
    handler(prompt: string): Promise<any> ;
  }


  export default IProcessadorChain;

  
  
