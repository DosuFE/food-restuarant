import { useState, useEffect } from "react";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

export default function InstagramCard({ post }) {
  const [bookmarked, setBookmarked] = useState(post.bookmarked);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % post.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [post.images.length]);

  return (
    <div className=" bg-white rounded-xl shadow-md shadow-black/15 overflow-hidden  ">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.profilePic}
            alt={`${post.username} profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-gray-500 text-xs">{post.location}</p>
          </div>
        </div>
        {/* Three dots icon (placeholder) */}
        <span>...</span>
      </div>

      {/* Image Container with Overlay */}
      <div className="relative">
        <img
          src={post.images[currentImageIndex]}
          alt="Recipe"
          className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-70"></div>

        {/* Navigation Dots */}
        {post.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
            {post.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-gray-500 opacity-50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`View image ${index + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>

      {/* Actions and Likes */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4 text-xl">
            <FiHeart className="cursor-pointer hover:text-red-500" />
            <FiMessageCircle className="cursor-pointer hover:text-blue-500" />
            <FiSend className="cursor-pointer hover:text-green-500" />
          </div>
          <div onClick={handleBookmarkClick} className="cursor-pointer text-xl">
            {bookmarked ? (
              <FaBookmark className="text-blue-600" />
            ) : (
              <FiBookmark />
            )}
          </div>
        </div>
        <p className="font-semibold text-sm">
          Liked by craig_love and {post.likes}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
          <span className="font-semibold">{post.username}</span>{" "}
          {post.description}
        </p>
        {/* Placeholder for comments/date */}
        <p className="text-xs text-gray-500 mt-2">September 19</p>
      </div>
    </div>
  );
}
