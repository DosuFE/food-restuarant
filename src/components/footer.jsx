import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    // Here you would typically make an API call to your backend
    setStatus({ type: "success", message: "Thank you for subscribing!" });
    setEmail("");
  };

  return (
    <footer className="w-full bg-white/90 backdrop-blur-md py-8 px-4 shadow-md shadow-black/40">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Navigation Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LOGO */}
          <div className="logo text-center md:text-left">
            <Link to="/">
              <p className="text-3xl font-bold  transition-colors duration-300">
                Foodieland
              </p>
            </Link>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <li>
                <Link 
                  to="/" 
                  className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/recipe" 
                  className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">Get the latest recipes and cooking tips delivered to your inbox</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            {status.message && (
              <p className={`mt-3 text-sm ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}>
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Foodieland. All rights reserved.
            Developed by Gbewato
          </p>
        </div>
      </div>
    </footer>
  );
}
