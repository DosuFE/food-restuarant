import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeTabs = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/recipes');
        
        if (!response.data || !response.data.recipes) {
          throw new Error('Invalid response format from API');
        }

        // Extract unique cuisines from recipes
        const uniqueCuisines = ["All", ...new Set(response.data.recipes.map(recipe => recipe.cuisine))];
        setCategories(uniqueCuisines);
        setError(null);
      } catch (err) {
        setError('Failed to fetch categories');
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-2">
        <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default RecipeTabs; 