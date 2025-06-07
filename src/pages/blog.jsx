import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Subscription from "../components/subscribeSection";
import BlogGrid from "../components/BlogGrid";

export default function Blog() {
  return (
    <>
      {/* NAV BAR */}
      <Navbar />

      {/* BLOG HEADER SECTION */}
      <section className="px-2 mt-12 md:px-5 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold sm:text-5xl mb-4">
            Food Blog & Articles
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the latest food trends, cooking tips, and delicious recipes
            from our expert chefs and food enthusiasts. Stay updated with our
            regular blog posts and articles.
          </p>
        </div>

        {/* BLOG GRID */}
        <BlogGrid />
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section className="px-2 my-12 md:px-5 lg:px-12 lg:my-16">
        <main className="newsletter_container w-full py-10 shadow-2xl md:rounded-4xl">
          <div className="relative z-10">
            <Subscription />
          </div>
        </main>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
