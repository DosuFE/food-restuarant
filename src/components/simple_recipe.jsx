import { simpleRecipe } from "../data/simple_recipe_data";
import { useState, useEffect } from "react";
// Import all recipe images
import wagyuBurger from "../assets/wagyu-burger.jpg";
import salmonGinger from "../assets/salmon-ginger.jpg";
import strawberryPancake from "../assets/strawberry-pancake.jpg";
import fruityPancake from "../assets/fruity-pancake.jpg";
import chickenMeatballs from "../assets/chicken-meatballs.jpg";
import thaiBasilChicken from "../assets/thai-basil-chicken.jpg";
import onepotChickenRice from "../assets/onepot-chicken-rice.jpg";
import chickenBroccoliPasta from "../assets/chicken-broccoli-pasta.jpg";
import chickenBecon from "../assets/chicken-becon.jpg";

// Create an image mapping object
const imageMap = {
  "../../assets/wagyu-burger.jpg": wagyuBurger,
  "../../assets/salmon-ginger.jpg": salmonGinger,
  "../../assets/strawberry-pancake.jpg": strawberryPancake,
  "../../assets/fruity-pancake.jpg": fruityPancake,
  "../../assets/chicken-meatballs.jpg": chickenMeatballs,
  "../../assets/thai-basil-chicken.jpg": thaiBasilChicken,
  "../../assets/onepot-chicken-rice.jpg": onepotChickenRice,
  "../../assets/chicken-broccoli-pasta.jpg": chickenBroccoliPasta,
  "../../assets/chicken-becon.jpg": chickenBecon,
};

export default function RecipeCard() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      // Reset showAll when switching to desktop view
      if (window.innerWidth >= 640) {
        setShowAll(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  // Determine how many cards to show based on screen size and showAll state
  const visibleRecipes = isMobile && !showAll ? simpleRecipe.slice(0, 4) : simpleRecipe;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {visibleRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="recipe_card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center cursor-pointer"
            onClick={() => handleCardClick(recipe)}
          >
            <div className="overflow-hidden rounded-lg w-full relative group">
              <img
                src={imageMap[recipe.image]}
                alt={recipe.title}
                className="recipe-image w-full h-48 object-cover rounded-lg shadow-md mb-4 transform transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
              {/* Hover message */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <p className="font-semibold text-lg mb-2">View Recipe</p>
                  <p className="text-sm">Click to see full details</p>
                </div>
              </div>
            </div>
            <h3 className="recipe-title text-lg font-semibold text-center mb-2 line-clamp-2">{recipe.title}</h3>
            <div className="flex justify-between w-full mt-auto pt-2 text-sm text-gray-600">
              <p className="recipe-time">⏱️ {recipe.time}</p>
              <p className="recipe-views">👁️ {recipe.views}M</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - Only visible on mobile when not all cards are shown */}
      {isMobile && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Load More Recipes
          </button>
        </div>
      )}

      {/* Modal for recipe details */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={imageMap[selectedRecipe.image]}
                alt={selectedRecipe.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h2>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-600">⏱️ {selectedRecipe.time}</p>
                <p className="text-gray-600">👁️ {selectedRecipe.views}M views</p>
              </div>
              {/* Add more recipe details here */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  A delicious {selectedRecipe.title.toLowerCase()} that you can prepare in just {selectedRecipe.time}. 
                  This recipe has been viewed by {selectedRecipe.views}M people and is perfect for any occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
