import React, { useState } from 'react';
import RecipePopup from './RecipePopup';

const RecipeCard = ({ recipe }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={() => setShowPopup(true)}
      >
        {/* Recipe Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Recipe Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{recipe.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{recipe.cuisine}</p>
          
          {/* Recipe Details */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{recipe.cookTimeMinutes} mins</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>{recipe.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Popup */}
      {showPopup && (
        <RecipePopup 
          recipe={recipe} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </>
  );
};

export default RecipeCard; 