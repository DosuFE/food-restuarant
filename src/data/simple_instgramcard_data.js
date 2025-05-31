import steak from "../assets/steak.jpg";
import salad from "../assets/salad.jpg";
import pancakes from "../assets/pancakes.jpg";
import onionBoard from "../assets/onions-board.jpg";
import profilePic from "../assets/Ellipse.jpg";
import chicken_becon from "../assets/chicken-becon.jpg";
import fruity_pancakes from "../assets/fruity-pancake.jpg";
import onepot_chicken_rice from "../assets/onepot-chicken-rice.jpg";
import thai_basil_chicken from "../assets/thai-basil-chicken.jpg";
import chicken_broccoli_pasta from "../assets/chicken-broccoli-pasta.jpg";
import chicken_meatballs from "../assets/chicken-meatballs.jpg";

const instagramPosts = [
  {
    id: 1,
    profilePic: profilePic,
    username: "Foodieland.",
    location: "Tokyo, Japan",
    images: [salad, chicken_becon, fruity_pancakes],
    likes: "44,686",
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    bookmarked: false,
  },
  {
    id: 2,
    profilePic: profilePic,
    username: "Foodieland.",
    location: "Tokyo, Japan",
    images: [pancakes, onepot_chicken_rice, thai_basil_chicken], // Assuming thai-basil-chicken is also available in assets
    likes: "44,686",
    description:
      "Sweet food can bring someone into happiness as long as they don't eat too much",
    bookmarked: false,
  },
  {
    id: 3,
    profilePic: profilePic,
    username: "Foodieland.",
    location: "Tokyo, Japan",
    images: [onionBoard, chicken_broccoli_pasta, chicken_meatballs], // Assuming chicken-broccoli-pasta and chicken_broccoli_pasta are available in assets
    likes: "44,686",
    description:
      "What are you doing before start cooking? Prepare the tools or ingredients?",
    bookmarked: false,
  },
  {
    id: 4,
    profilePic: profilePic,
    username: "Foodieland.",
    location: "Tokyo, Japan",
    images: [steak, salad, pancakes],
    likes: "44,686",
    description:
      "Steak never be wrong, it's suitable for you who want romantic dinner",
    bookmarked: false,
  },
];

export default instagramPosts;
