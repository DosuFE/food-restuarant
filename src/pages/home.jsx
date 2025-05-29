import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import breakfast from "../assets/breakfast.jpg";
import vegan from "../assets/vegan.jpg";
import meat from "../assets/meat.jpg";
import dessert from "../assets/dessert.jpg";
import lunch from "../assets/lunch.jpg";
import chocolate from "../assets/chocolate.jpg";
import RecipeCard from "../components/simple_recipe";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* CATEGORIES SECTION */}
      <section className="mt-10 px-2 md:px-5 lg:px-10">
        <main>
          {/* CATEGORIES */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold md:text-5xl">Categories</h1>
            <button className="btn font-semibold px-5 py-3 rounded-lg">
              View All Categories
            </button>
          </div>

          {/* CATEGORIES ITEM */}
          <div className="pt-8 md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 pb-4">
            {/* Mobile scrolling container */}
            <div className="flex overflow-hidden md:hidden">
              <div className="flex animate-scroll">
                {/* BREAKFAST */}
                <div className="breakfast flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={breakfast}
                    alt="Breakfast Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Breakfast</p>
                </div>

                {/* VEGAN */}
                <div className="vegan flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={vegan}
                    alt="Vegan Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Vegan</p>
                </div>

                {/* MEAT */}
                <div className="meat flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={meat}
                    alt="Meat Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Meat</p>
                </div>

                {/* DESSERT */}
                <div className="dessert flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={dessert}
                    alt="Dessert Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Dessert</p>
                </div>

                {/* LUNCH */}
                <div className="lunch flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={lunch}
                    alt="Lunch Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Lunch</p>
                </div>

                {/* CHOCOLATE */}
                <div className="chocolate flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={chocolate}
                    alt="Chocolate Snacks"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Chocolate</p>
                </div>

                {/* Duplicate items for seamless scrolling */}
                {/* BREAKFAST */}
                <div className="breakfast flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={breakfast}
                    alt="Breakfast Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Breakfast</p>
                </div>

                {/* VEGAN */}
                <div className="vegan flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={vegan}
                    alt="Vegan Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Vegan</p>
                </div>

                {/* MEAT */}
                <div className="meat flex flex-col items-center gap-5 rounded-4xl min-w-[200px] mx-2">
                  <img
                    src={meat}
                    alt="Meat Food"
                    className="rounded-xl object-cover"
                  />
                  <p className="font-semibold">Meat</p>
                </div>
              </div>
            </div>

            {/* Desktop grid items */}
            <div className="hidden md:block">
              {/* BREAKFAST */}
              <div className="breakfast flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={breakfast}
                  alt="Breakfast Food"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Breakfast</p>
              </div>
            </div>

            <div className="hidden md:block">
              {/* VEGAN */}
              <div className="vegan flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={vegan}
                  alt="Vegan Food"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Vegan</p>
              </div>
            </div>

            <div className="hidden md:block">
              {/* MEAT */}
              <div className="meat flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={meat}
                  alt="Meat Food"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Meat</p>
              </div>
            </div>

            <div className="hidden md:block">
              {/* DESSERT */}
              <div className="dessert flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={dessert}
                  alt="Dessert Food"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Dessert</p>
              </div>
            </div>

            <div className="hidden md:block">
              {/* LUNCH */}
              <div className="lunch flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={lunch}
                  alt="Lunch Food"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Lunch</p>
              </div>
            </div>

            <div className="hidden md:block">
              {/* CHOCOLATE */}
              <div className="chocolate flex flex-col items-center gap-5 rounded-4xl">
                <img
                  src={chocolate}
                  alt="Chocolate Snacks"
                  className="rounded-xl object-cover"
                />
                <p className="font-semibold">Chocolate</p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* SIMPLE RECIPE & TASTY SECTION */}
      <section className="mt-10 px-2 md:px-5 lg:mt-12 lg:px-10">
        {/* SIMPLE RECIPE & TASTY */}
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-2xl font-semibold md:text-5xl">
            Simple and tasty recipes
          </h1>

          <p className="text-gray-500 max-w-full md:text-lg lg:max-w-1/2">
            Discover a variety of delicious recipes that are easy to make and
            perfect for any occasion. From quick breakfasts to gourmet dinners,
            we have something for everyone.
          </p>
        </div>
        <main className="mt-10">
          {/* Recipe Cards */}
          <RecipeCard />
        </main>
      </section>
    </>
  );
}
