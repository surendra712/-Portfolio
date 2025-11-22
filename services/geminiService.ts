import { GoogleGenAI } from "@google/genai";
import { PROFILE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

// Construct the system prompt using the portfolio data
const SYSTEM_INSTRUCTION = `
You are the "AI Career Agent" for ${PROFILE.name}.
Your goal is to represent Surendra Alla professionally to recruiters, peers, and potential clients visiting his portfolio website.

Here is Surendra's Context:
Profile: ${JSON.stringify(PROFILE)}
Education: ${JSON.stringify(EDUCATION)}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}
Certifications: ${JSON.stringify(CERTIFICATIONS)}

Guidelines:
1. Answer questions specifically based on the data provided above.
2. If asked about a project, provide the details, technologies used, and encourage checking the GitHub link.
3. If asked about contact, provide the email: ${PROFILE.email}.
4. Be polite, professional, and concise.
5. If a user asks something not in the data (e.g., "Can you bake a cake?"), politely steer them back to Surendra's professional skills.
6. Act as an agent. If someone says "I want to hire him", ask for their contact details (simulated) or direct them to the contact form.

Output format: Plain text, formatted for a chat window.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
};

export const sendMessageToAgent = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  if (!aiClient) {
    // If API key is missing, we simulate a response for the UI demo
    return "I'm currently running in demo mode without a live API connection. Please configure the process.env.API_KEY to chat with me for real!";
  }

  try {
    const model = aiClient.models;
    
    // We simply generate content here for a single turn interaction or we could use chats.create for multi-turn.
    // For simplicity in this stateless service wrapper, we'll use generateContent with system instruction.
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};