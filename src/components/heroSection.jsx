import hot_recipes from "../assets/hot_recipes.jpg";
import badge from "../assets/Badge.jpg";
import johnSmith from "../assets/Ellipse.jpg";
import bakedPlate from "../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg";
// REACT ICONS OF PLAY CIRCLE
import { FaPlayCircle } from "react-icons/fa";
import MinChicken from "./minChick";

export default function HeroSection() {
  return (
    // HERO SECTION
    <section className="flex items-center justify-center lg:ml-10 lg:pt-10">
      <main className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl mx-auto gap-0">
        <div className="hero_section w-full lg:rounded-tl-2xl lg:rounded-bl-2xl  lg:h-[450px] lg:px-10 ">
          <div className="bg-black/60 px-2 h-fit w-full py-5 lg:bg-transparent lg:px-0">
            {/* HOT RECIPES */}
            <span
              className="bg-white flex items-center justify-center mt10
            rounded-4xl space-x-3 py-2 w-[180px] drop-shadow-lg drop-shadow-white/70
          "
            >
              <img src={hot_recipes} alt="Hot Recipes" />
              <p className="font-semibold tracking-wide">Hot Recipe</p>
            </span>

            {/* SPICY DELICIOUS CHICKEN WINGS */}
            <p
              className="spicy relative py-5 text-5xl font-semibold text-white 
             md:pt-10 md:text-6xl md:max-w-xl lg:text-black
          "
            >
              Spicy delicious chicken wings
            </p>
            <img
              src={badge}
              alt="Badge"
              className="hidden rounded-[50%] absolute top-36 md:left-3/5 lg:left-9/20 md:block"
            />

            {/* SPICY DELICIOUS TEXT */}
            <p className="font-normal text-white lg:text-black/60 md:max-w-1/2 lg:max-w-full">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            {/* MINUTE & FORK KNIFE */}
            <MinChicken />

            {/* JOHN SMITH & VIEW RECIPE */}
            <div className="flex items-center justify-between py-5 text-white lg:text-black">
              <span className="flex items-center space-x-3.5">
                <img
                  src={johnSmith}
                  alt="John Smith"
                  className="rounded-[50%]"
                />
                <span className="flex flex-col itemscenter space-y-1">
                  <p className="font-bold tracking-wide">John Smith</p>
                  <p className="font-light tracking-wide">15 March 2022</p>
                </span>
              </span>

              <span
                className="bg-black flex items-center justify-center
                rounded-lg space-x-3 px-3 py-3  drop-shadow-lg drop-shadow-white/70 md:w-[170px]
            "
              >
                <p className="text-white font-semibold tracking-wide">
                  Video Recipe
                </p>
                <FaPlayCircle className="text-white" />
              </span>
            </div>
          </div>
        </div>
        <img
          src={bakedPlate}
          alt="Baked Sauce Tomato Plate"
          className="hidden w-full h-[350px] object-cover rounded-tr-2xl rounded-br-2xl  lg:block lg:h-[450px] "
        />
      </main>
    </section>
  );
}
