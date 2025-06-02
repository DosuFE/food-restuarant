import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import breakfast from "../assets/breakfast.jpg";
import vegan from "../assets/vegan.jpg";
import meat from "../assets/meat.jpg";
import dessert from "../assets/dessert.jpg";
import lunch from "../assets/lunch.jpg";
import chocolate from "../assets/chocolate.jpg";
import RecipeCard from "../components/simple_recipe";
import chef from "../assets/portrait-happy-male-chef-dressed-uniform.jpg";
import onions from "../assets/onions.jpg";
import tomato from "../assets/tomato.jpg";
import { useNavigate } from "react-router-dom";
import InstagramCard from "../components/Instagram_card";
import instagramPosts from "../data/simple_instgramcard_data.js";
import { FaInstagram } from "react-icons/fa";
// import DeliciousRecipeGrid from "../components/deliciousRecipeGrid";

export default function Home() {
  const navigate = useNavigate();

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
        <article className="mt-10">
          {/* Recipe Cards */}
          <RecipeCard />
        </article>
      </section>

      {/* KITCHEN SECTION */}
      <section className="mt-10 px-2 md:px-5 lg:mt-12 lg:px-10">
        <main className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="space-y-5 text-center md:mt-20 lg:w-3/5 lg:text-start">
            <h2 className="text-3xl font-semibold text-center sm:text-5xl lg:text-left">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-gray-500 text-center lg:max-w-full lg:text-left">
              Cooking is not just about making food, it's about creating
              memories. With our easy-to-follow recipes, you can impress your
              family and friends with delicious meals. kitchen.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-black/80 text-white 
               px-10 py-3 rounded-lg cursor-pointer"
            >
              Learn More
            </button>
          </div>

          {/* KITCHEN PAGE */}
          <div className="kitchen relative px-8 pt-10 rounded-4xl">
            <img
              src={chef}
              alt="Chef In Kitchen"
              className="w[600px] rounded-4xl"
            />
            <img
              src={tomato}
              alt="Tomato"
              className="absolute top-4/5 left-3/20 rounded-[50%]"
            />
            <img
              src={meat}
              alt="Meat"
              className="absolute top-1/5 left-1/10 rounded-[50%]"
            />

            <img
              src={onions}
              alt="Onions"
              className="absolute top-1/5 right-1/4 rounded-[50%]"
            />

            <img
              src={vegan}
              alt="Vegan"
              className="absolute top-3/10 right-0 rounded-[50%]"
            />
          </div>
        </main>
      </section>

      {/* @FOODIELAND ON INSTAGRAM */}
      <section className="instagram_card py-10 px-2  md:px-10 lg:px-10 md:py-12 lg:py-20">
        <main>
          <div className="text-center flex flex-col items-center justify-center space-y-5 ">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Check out @foodieland on Instagram
            </h2>

            <p
              className="text-gray-500 max-w-full
              md:text-lg lg:max-w-1/2"
            >
              Follow us on Instagram for daily inspiration, recipes, and
              behind-the-scenes content. Join our community of food lovers and
              share your culinary creations with us!
            </p>
          </div>

          {/* INSTAGRAM POSTS */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <InstagramCard key={post.id} post={post} />
            ))}
          </div>

          {/* MY INSTAGRAM LINK */}
          <div className="text-center mx-auto flex items-center justify-center">
            <button
              className="bg-black/80 text-white
            px-10 py-3 rounded-lg cursor-pointer flex items-center justify-center space-x-2"
            >
              <a
                href="https://www.instagram.com/gbewato06/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaInstagram />
                <span className="text-center">View in Instagram</span>
              </a>
            </button>
          </div>
        </main>
      </section>

      {/* DELICIOUS RECIPE SECTION */}
      <main className="mt-10 px-2 md:px-5 lg:mt-12 lg:px-10">
        <div className="text-center flex flex-col items-center justify-center space-y-5">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Try this delicious recipe to make your day
          </h2>

          <p className="text-gray-500 max-w-full md:text-lg lg:max-w-1/2">
            Discover our collection of mouthwatering recipes that will transform
            your cooking experience. From quick and easy meals to gourmet
            delights, we have something for every taste.
          </p>
        </div>
        <article className="my-10">{/* <DeliciousRecipeGrid /> */}</article>
      </main>
    </>
  );
}
