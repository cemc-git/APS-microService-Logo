import ISubsistemaComunicacaoTextToText from "../interfaces/ISubsistemaComunicacaoTextToText";


class FachadaComunicacaoT2T implements ISubsistemaComunicacaoTextToText{

    async obterPromptIA(prompt: string): Promise<any> {
  
        const chaveBira = "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";
        console.log("inicioFachada")
    
        // Método assinc
        const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
            headers: { Authorization: "Bearer "+ chaveBira, 'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  "role": "user", 
                  "content": prompt
                }
              ],
            }),
        })

        
        const responseJsom = await response.json()
        console.log(responseJsom)
        return responseJsom.choices[0].message.content
        
        
    
      }
    
    
     

}

export default FachadaComunicacaoT2T;