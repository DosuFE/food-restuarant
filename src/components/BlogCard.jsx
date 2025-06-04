import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPopup from './BlogPopup';

const BlogCard = ({ blog }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        {/* Blog Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            {blog.category}
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime} min read
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{blog.author.name}</span>
            </div>
            <span className="text-orange-500 font-medium text-sm">
              Read More →
            </span>
          </div>
        </div>
      </div>

      {/* Blog Popup */}
      {showPopup && (
        <BlogPopup 
          blog={blog} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </>
  );
};

export default BlogCard; 