import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Invalid ingredients" });
  }

  const prompt = `
You are a professional chef.

Ingredients:
${ingredients.join(", ")}

Generate:
1. Recipe title
2. Ingredients with quantities
3. Step-by-step instructions
4. Cooking tips

Format the response in Markdown.
`;

  try {
    const result = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      inputs: prompt,
      parameters: {
        max_new_tokens: 600,
        temperature: 0.6,
        top_p: 0.9,
      },
    });

    res.json({ recipe: result.generated_text });
  } catch (err) {
    console.error("HF ERROR:", err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AI backend running on http://localhost:${PORT}`);
});
