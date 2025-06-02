import { useState } from 'react';

const DeliciousRecipeCard = ({ recipe }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer
        ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className={`w-full h-full object-cover transition-transform duration-500
            ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between bg-gradient-to-b from-black/70 to-transparent text-white text-sm">
          <span>{recipe.time}</span>
          <span>{recipe.views}k views</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {recipe.difficulty}
          </span>
          <span className="bg-gray-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
            ⭐ {recipe.rating}
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {recipe.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliciousRecipeCard;
