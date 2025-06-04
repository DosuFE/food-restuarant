import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTabs from './RecipeTabs';
import RecipeSort from './RecipeSort';
import RecipeCard from './RecipeCard';

const ApiRecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/recipes');
        
        if (!response.data || !response.data.recipes) {
          throw new Error('Invalid response format from API');
        }

        setAllRecipes(response.data.recipes);
        const sortedRecipes = sortRecipes(response.data.recipes, sortBy);
        setRecipes(sortedRecipes);
        setError(null);
      } catch (err) {
        let errorMessage = 'Failed to fetch recipes. ';
        
        if (err.response) {
          errorMessage += `Server responded with status ${err.response.status}: ${err.response.data?.message || 'Unknown error'}`;
        } else if (err.request) {
          errorMessage += 'No response received from server. Please check your internet connection.';
        } else {
          errorMessage += err.message;
        }
        
        setError(errorMessage);
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes based on selected category
    if (allRecipes.length > 0) {
      let filteredRecipes = [...allRecipes];
      if (selectedCategory !== 'All') {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.cuisine.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      const sortedRecipes = sortRecipes(filteredRecipes, sortBy);
      setRecipes(sortedRecipes);
    }
  }, [selectedCategory, sortBy, allRecipes]);

  const sortRecipes = (recipes, sortBy) => {
    const sortedRecipes = [...recipes];
    switch (sortBy) {
      case "popular":
        return sortedRecipes.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sortedRecipes;
      case "time":
        return sortedRecipes.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);
      case "rating":
        return sortedRecipes.sort((a, b) => b.rating - a.rating);
      default:
        return sortedRecipes;
    }
  };

  return (
    <div className="w-full">
      {/* FILTER AND SORT SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <RecipeTabs 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        <RecipeSort 
          sortBy={sortBy} 
          setSortBy={setSortBy} 
        />
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {/* ERROR STATE */}
      {error && (
        <div className="text-center text-red-500 py-8">
          <p className="font-semibold mb-2">Error Loading Recipes</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* RECIPE GRID */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiRecipeGrid; 