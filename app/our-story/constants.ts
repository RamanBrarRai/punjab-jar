import { GiIndiaGate } from "react-icons/gi";
import { FiSun, FiMapPin } from "react-icons/fi";

export const BRAND = {
  cream: "#FDF8EC",
  pink: "#FF1F8B",
  yellow: "#FFC107",
  red: "#C0392B",
  ink: "#111111",
  muted: "#444444",
  white: "#FFFFFF",
  section: "#F5EEDF",
  gold: "#F4C430",
  green: "#2D5A27",
};

export const family = [
  {
    name: "Raman",
    role: "Founder & Brand Vision",
    blurb: "The original idea, brand story and vision behind Jar of Punjab.",
    image: "/images/raman.jpg",
    blobColor: "#E8F5E9", 
  },
  {
    name: "Prabh",
    role: "Business Partner",
    blurb: "Co-owning the brand's vision and strategy, managing key business operations, and driving sustainable growth.",
    image: "/images/prabh.jpg",
    blobColor: "#FFF9C4",
  },
  {
    name: "Gurpreet Singh",
    role: "Product & Operations Support",
    blurb: "Supporting the family venture through product-related work and operations.",
    image: "/images/gurpreet.jpg",
    blobColor: "#E8F5E9",
  },
  {
    name: "Lovepreet Singh",
    role: "Product & Marketing Support",
    blurb: "Leading our marketing efforts and helping share the Jar of Punjab story with more families.",
    image: "/images/lovepreet.jpg",
    blobColor: "#FFF9C4",
  },
];

export const regions = [
  {
    icon: GiIndiaGate,
    title: "Punjab",
    copy: "Mustard oil, sun-cured mango, and the bold, tangy notes of home.",
    color: BRAND.pink,
  },
  {
    icon: FiSun,
    title: "Coastal India",
    copy: "Bright, zesty lemons and the warmth of southern spices.",
    color: BRAND.yellow,
  },
  {
    icon: FiMapPin,
    title: "Across the Country",
    copy: "Seasonal produce and regional favourites, treated with the same care.",
    color: BRAND.pink,
  },
];