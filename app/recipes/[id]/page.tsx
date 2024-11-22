import { notFound } from "next/navigation";
import { recipes } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, Flame, Scale } from "lucide-react";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === parseInt(params.id));

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/recipes">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
            </Button>
          </Link>

          <Card className="overflow-hidden">
            <div className="relative h-[400px]">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-gray-500" />
                  <span>{recipe.calories} calories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-gray-500" />
                  <span>Serves 4</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
              <p className="text-gray-600 mb-6">{recipe.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {recipe.diet.map((diet) => (
                  <span
                    key={diet}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {diet}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Nutrition Facts</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>Calories</span>
                      <span className="font-medium">{recipe.nutrition.calories}g</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Protein</span>
                      <span className="font-medium">{recipe.nutrition.protein}g</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Carbs</span>
                      <span className="font-medium">{recipe.nutrition.carbs}g</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Fat</span>
                      <span className="font-medium">{recipe.nutrition.fat}g</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Fiber</span>
                      <span className="font-medium">{recipe.nutrition.fiber}g</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <p className="flex-1 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}