import DeliciousRecipeCard from "./deliciousRecipeCard.jsx";
import { deliciousRecipes } from "../data/deliciousRecipes.js";

const DeliciousRecipes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {deliciousRecipes.map((recipe) => (
        <DeliciousRecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default DeliciousRecipes;
