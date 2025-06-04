import React from 'react';

const RecipeSort = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      <option value="popular">Most Popular</option>
      <option value="newest">Newest First</option>
      <option value="time">Cooking Time</option>
      <option value="rating">Highest Rated</option>
    </select>
  );
};

export default RecipeSort; 