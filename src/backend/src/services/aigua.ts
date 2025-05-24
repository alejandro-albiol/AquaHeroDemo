import OpenAI from 'openai';
import { AiguaRequest } from '../shared/aiguaRequest';
import { AiguaResponse } from '../shared/aiguaResponse';

export class Aigua {
  private openai: OpenAI;

  constructor(apiKey: string, referer: string, title: string) {
    this.openai = new OpenAI({
      apiKey,
      baseURL: 'https://openrouter.ai/api/v1',
      defaultHeaders: {
        'HTTP-Referer': referer, // obligatorio para OpenRouter
        'X-Title': title,        // nombre de tu app/proyecto
      },
    });
  }

  async process(request: AiguaRequest): Promise<AiguaResponse> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: request.model || 'nousresearch/hermes-3-llama-3.1-70b', // modelo multilingüe
        messages: [
          {
            role: 'system',
            content: 'Responde siempre en español de forma clara, educativa y concisa.',
          },
          {
            role: 'user',
            content: request.prompt,
          },
        ],
      });

      return {
        success: true,
        data: completion.choices[0].message,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Error desconocido',
      };
    }
  }
}

// 

/*
Data response example:

  "data": {
      "role": "assistant",
      "content": "Una excelente forma de ahorrar agua en casa es siendo consciente en el uso del grifo. Evita dejar el agua corriendo mientras te lavas los dientes, te afeitas o te peinas. Además, puedes instalar dispositivos ahorradores de agua en los grifos y en el inodoro, y utilizar una bañera en lugar de una ducha, ya que generalmente consumes menos agua. Otro consejo útil es reparar de inmediato cualquier gotera o fuga de agua en casa.",
      "refusal": null,
      "reasoning": null
    }
*/