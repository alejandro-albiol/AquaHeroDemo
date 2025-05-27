export class PromptGenerator {
  private readonly prompts = [
    "Dame un consejo para ahorrar agua en la ducha",
    "Comparte un dato curioso sobre el consumo de agua",
    "¿Cómo puedo ahorrar agua en la cocina?",
    "Dime un consejo para el riego del jardín",
    "Comparte un dato interesante sobre el agua",
    "¿Cómo puedo enseñar a los niños a ahorrar agua?",
    "Dame un consejo rápido para la limpieza del hogar",
    "¿Qué puedo hacer para reducir el consumo de agua diario?",
    "Cuéntame un dato sorprendente sobre el agua en el planeta"
  ];

  generatePrompt(): string {
    return this.prompts[Math.floor(Math.random() * this.prompts.length)];
  }
}