import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav
        className="flex items-center justify-between px-4 py-3
       bg-white shadow-md relative md:bg-slate-100 lg:px-10 lg:py-4"
      >
        {/* LOGO */}
        <div>
          <Link to="/">
            <p className="logo">Foodieland</p>
          </Link>
        </div>

        {/* MOBILE VIEW BUTTON */}
        <button
          className="menu-toggle lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger${isMenuOpen ? " open" : ""}`}></span>
        </button>

        {/* NAVIGATION LINKS */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } py-3 px-4 flex-col absolute top-20 right-3 w-2/5 bg-slate-100 backdrop-blur-md
           font-semibold z-10 lg:static lg:flex lg:flex-row lg:bg-transparent
           items-start justify-start space-y-3 rounded-lg shadow-lg
           md:top-24 md:w-1/5 lg:static   md:space-x-5 lg:bg-transparent 
           lg:flex lg:backdrop-blur-none lg:shadow-none
           md:space-y-5 lg:space-y-0 lg:w-auto lg:space-x-10 lg:flex-row`}
        >
          <li>
            <Link
              to="/"
              className="nav-link text-lg text-black/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipe"
              className="nav-link text-lg text-black/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="nav-link text-lg text-black/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link text-lg text-black/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link text-lg text-black/80"
              onClick={() => setIsMenuOpen(false)}
            >
              About US
            </Link>
          </li>
        </ul>

        {/* SOCIAL MEDIA ICON MENU */}
        <div className="hidden text-2xl lg:flex lg:items-center lg:space-x-5">
          <FaFacebook className="hover:text-blue-800" />
          <FaTwitter className="hover:text-pink-800" />
          <FaInstagram className="hover:text-red-800" />
        </div>
      </nav>
    </header>
  );
}
