import OpenAI from 'openai';
import { AiguaRequest } from '../shared/aiguaRequest';
import { AiguaResponse } from '../shared/aiguaResponse';

export class Aigua {
  private openai: OpenAI;

  constructor(apiKey: string, referer: string, title: string) {
    if (!apiKey) {
      throw new Error('API key is required');
    }

    this.openai = new OpenAI({
      apiKey,
      baseURL: 'https://openrouter.ai/api/v1',
      defaultHeaders: {
        'HTTP-Referer': referer,
        'X-Title': title,
        'Authorization': `Bearer ${apiKey}`
      },
    });
  }

  async process(request: AiguaRequest): Promise<AiguaResponse> {
    try {
      if (!request.prompt) {
        throw new Error('Prompt is required');
      }

      const completion = await this.openai.chat.completions.create({
        model: 'nousresearch/hermes-3-llama-3.1-70b',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente amigable experto en ahorro de agua. Da consejos cortos y prácticos en español. ' +
                     'Máximo 2 frases. Incluye de vez en cuando datos curiosos sobre el agua. Sé directo y motivador.'
          },
          {
            role: 'user',
            content: request.prompt,
          },
        ],
        max_tokens: 100,
        temperature: 0.7
      });

      if (!completion.choices[0].message.content) {
        throw new Error('No response content received');
      }

      return {
        success: true,
        data: completion.choices[0].message.content
      };
    } catch (error: any) {
      console.error('Error al procesar la solicitud de consejo:', error);
      return {
        success: false,
        error: error.message || 'No se pudo obtener el consejo'
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