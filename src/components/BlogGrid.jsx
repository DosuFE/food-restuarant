import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Array of reliable food-related images
  const foodImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929'
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // For now, we'll use dummy data. Replace with your API endpoint later
        const response = await axios.get('https://dummyjson.com/posts');
        
        if (!response.data || !response.data.posts) {
          throw new Error('Invalid response format from API');
        }

        // Transform the data to match our blog structure
        const transformedBlogs = response.data.posts.map((post, index) => ({
          id: post.id,
          title: post.title,
          excerpt: post.body,
          // Use a reliable image source with error handling
          image: foodImages[index % foodImages.length],
          category: ['Cooking Tips', 'Recipes', 'Food News', 'Healthy Eating'][Math.floor(Math.random() * 4)],
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          readTime: Math.floor(Math.random() * 10) + 5,
          author: {
            name: ['John Doe', 'Jane Smith', 'Mike Johnson'][Math.floor(Math.random() * 3)],
            avatar: `https://i.pravatar.cc/150?img=${post.id}`
          }
        }));

        setBlogs(transformedBlogs);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  // Get unique categories
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p className="font-semibold mb-2">Error Loading Blog Posts</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid; 