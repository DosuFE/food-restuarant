import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Array of reliable food-related images from a CDN
  const foodImages = [
    'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/20/15/06/healthy-1995044_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/13/39/attractive-1869761_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/20/15/06/healthy-1995044_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/13/39/attractive-1869761_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg'
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
          // Use a reliable CDN image source
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