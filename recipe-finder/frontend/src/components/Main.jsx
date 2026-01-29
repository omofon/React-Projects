import { useEffect, useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../utils/ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function handleAction(formData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;

    setIngredients((prev) => [...prev, newIngredient]);
    formRef.current.reset(); // Clears input after adding
  }

  function clearList() {
    setIngredients([]);
  }

  return (
    <main className="space-y-8">
      <form ref={formRef} action={handleAction} className="flex gap-2 h-12">
        <input
          className="flex-grow px-4 rounded-lg border border-linen bg-canvas text-ink focus:outline-none focus:ring-2 focus:ring-clay/50 shadow-sm"
          type="text"
          name="ingredient"
          placeholder="e.g. Eggs, Flour, Milk"
          aria-label="Add ingredient"
        />
        <button className="bg-clay hover:bg-burnt-clay text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md active:scale-95">
          + Add
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ingredientsRef={recipeSection}
          clearList={clearList}
        />
      )}

      {recipe && (
        <div ref={recipeSection} className="pt-4">
          <ClaudeRecipe recipe={recipe} />
        </div>
      )}
    </main>
  );
}
