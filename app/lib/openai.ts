import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateText(techInput: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "Eres un consultor de negocios experto. Traduce lo técnico a valor de negocio. Sé breve." },
      { role: "user", content: techInput }
    ]
  });
  return response.choices[0].message.content;
}