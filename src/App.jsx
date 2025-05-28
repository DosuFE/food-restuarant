import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import Recipe from "./pages/recipes";
import About from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      {/* Define the routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
