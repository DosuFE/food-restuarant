import timer from "../assets/Timer.jpg";
import forknife from "../assets/ForkKnife.jpg";
export default function MinChicken() {
  return (
    <div className="flex items-center space-x-5 pt-5 text-white lg:text-black">
      <span
        className="bg-black/10 flex items-center justify-center
        rounded-4xl space-x-3 py-2 w-[150px] drop-shadow-lg drop-shadow-white/70
        "
      >
        <img src={timer} alt="Timer" className="rounded-[50%]" />
        <p className="font-normal  tracking-wide">30 Minutes</p>
      </span>

      <span
        className="bg-black/10 flex items-center justify-center
        rounded-4xl space-x-3 py-2 w-[150px] drop-shadow-lg drop-shadow-white/70
        "
      >
        <img src={forknife} alt="Fork Knife" className="rounded-[50%]" />
        <p className="font-normal  tracking-wide">Hot Recipe</p>
      </span>
    </div>
  );
}
