import { RecipeCard } from "@/components/recipe-card";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  calories: number;
  category: string;
  diet: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
}

export function FeaturedRecipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}