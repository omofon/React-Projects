import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const userPrompt = `[INST] You are a culinary expert. I have the following ingredients: ${ingredientsString}. Please suggest a recipe with a title, ingredients list, and instructions. Format in Markdown. [/INST]`;

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      max_tokens: 1024,
      temperature: 0.5,
    });

    if (!response.choices || response.choices.length === 0) {
      throw new Error("No response choices returned from provider.");
    }

    return response.choices[0].message.content;
  } catch (err) {
    console.error("HF Inference Error:", err);
    return "### Cooking Interrupted\nI ran into an error connecting to the recipe server. Please try again in a few seconds!";
  }
}
