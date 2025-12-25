import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client strictly using the environment variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const explainSimply = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اشرح الموضوع التالي بأسلوب "تقنية فاينمان". تخيل أنك تشرح لطفل عمره 10 سنوات بتبسيط شديد ووضوح، مع ضرب أمثلة واقعية. الموضوع هو: ${topic}`,
      config: {
        systemInstruction: "أنت معلم خبير في تبسيط العلوم والتعلم الفعّال. تتحدث باللغة العربية بوضوح وسلاسة.",
        temperature: 0.7,
      },
    });
    return response.text || "عذراً، لم أتمكن من معالجة الطلب حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع المعلم الذكي. تأكد من إعداد مفتاح API بشكل صحيح.";
  }
};

export const evaluateUnderstanding = async (explanation: string, topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `قام طالب بشرح موضوع "${topic}" كالتالي: "${explanation}". 
      قم بتقييم هذا الشرح بناءً على "تقنية فاينمان". هل الشرح بسيط؟ هل هناك فجوات في الفهم؟ قدم نصائح للتحسين.`,
      config: {
        systemInstruction: "أنت مدرب دراسة يساعد الطلاب على تحسين فهمهم العميق.",
        temperature: 0.5,
      },
    });
    return response.text || "تعذر التقييم حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "خطأ في التقييم.";
  }
};