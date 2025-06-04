import Navbar from "../components/navbar";
import Footer from "../components/footer.jsx";
import Subscription from "../components/subscribeSection.jsx";
import ApiRecipeGrid from "../components/ApiRecipeGrid";

export default function Recipe() {
  return (
    <>
      {/* NAV BAR */}
      <Navbar />

      {/* RECIPE HEADER SECTION */}
      <section className="px-2 mt-12 md:px-5 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold sm:text-5xl mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Explore our collection of mouthwatering recipes that will transform
            your cooking experience. From quick and easy meals to gourmet
            delights, we have something for every taste.
          </p>
        </div>

        {/* API RECIPE GRID */}
        <ApiRecipeGrid />
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
