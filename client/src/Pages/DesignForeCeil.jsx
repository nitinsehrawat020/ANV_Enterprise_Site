import { Main } from ".";

import DesignCard from "../component/design/DesignCard";
import {
  Category,
  StyleCardContainer,
} from "../component/design/styleDesignFalseCeil";
import TitleContainer from "../component/design/TitleContainer";
import FiltersAndCategory from "../ui/FiltersAndCategory";
import Pagination from "../ui/Pagination";

const data = [
  {
    title: "False Ceil Design",
    designType: "POP",
    designArea: "Living Room",
    description:
      "Your Search for the POP False Ceil Design to make your dream house more attractive end here. Just pick the design and sit with a cup of tea and let us began with our magic here found all kind of design for your need and use the sort and category to find for what you are looking for. In case you need any help feel free to Contact Us",
    ETA: "4 days",
    rating: 4,
    img: "/pictures/banner/image1.webp",
  },
  {
    title: "Modern Ceiling Design",
    designType: "POP",
    designArea: "Bedroom",
    description:
      "A sleek and modern POP ceiling design to add elegance to your bedroom. Choose your favorite design and let us handle the rest!",
    ETA: "5 days",
    rating: 4.5,
    img: "/pictures/banner/image2.webp",
  },
  {
    title: "Luxury Ceiling Panel",
    designType: "Gypsum",
    designArea: "Living Room",
    description:
      "Enhance your living room with this luxury gypsum ceiling design, crafted for elegance and durability.",
    ETA: "6 days",
    rating: 4.7,
    img: "/pictures/banner/image3.webp",
  },
  {
    title: "Classic False Ceiling",
    designType: "Plaster",
    designArea: "Dining Room",
    description:
      "A timeless false ceiling design that brings class and sophistication to your dining area. Ideal for both modern and vintage interiors.",
    ETA: "4 days",
    rating: 4.2,
    img: "/pictures/banner/image4.webp",
  },
  {
    title: "Minimalist Ceiling Design",
    designType: "POP",
    designArea: "Office",
    description:
      "A clean and minimalist ceiling design, perfect for modern office spaces. It enhances the ambiance while maintaining a professional look.",
    ETA: "3 days",
    rating: 4.3,
    img: "/pictures/banner/image5.webp",
  },
  {
    title: "Royal Ceiling Finish",
    designType: "Gypsum",
    designArea: "Hallway",
    description:
      "A grand and royal gypsum ceiling design to make your hallway look luxurious and eye-catching.",
    ETA: "5 days",
    rating: 4.8,
    img: "/pictures/banner/molding1.webp",
  },
  {
    title: "Elegant Ceiling Décor",
    designType: "Plaster",
    designArea: "Lobby",
    description:
      "A simple yet elegant ceiling décor to add charm and sophistication to your home or office lobby.",
    ETA: "4 days",
    rating: 4.4,
    img: "/pictures/banner/molding2.webp",
  },
  {
    title: "Vintage Ceiling Design",
    designType: "POP",
    designArea: "Bedroom",
    description:
      "A vintage-style ceiling design to give your bedroom a charming and cozy atmosphere.",
    ETA: "5 days",
    rating: 4.6,
    img: "/pictures/banner/smallRoom.webp",
  },
  {
    title: "Vintage Ceiling Design",
    designType: "POP",
    designArea: "Bedroom",
    description:
      "A vintage-style ceiling design to give your bedroom a charming and cozy atmosphere.",
    ETA: "5 days",
    rating: 4.6,
    img: "/pictures/banner/smallRoom.webp",
  },
  {
    title: "Vintage Ceiling Design",
    designType: "POP",
    designArea: "Bedroom",
    description:
      "A vintage-style ceiling design to give your bedroom a charming and cozy atmosphere.",
    ETA: "5 days",
    rating: 4.6,
    img: "/pictures/banner/smallRoom.webp",
  },
];
function DesignForeCeil() {
  return (
    <>
      <Main>
        <TitleContainer title="False Ceil Design" />

        <StyleCardContainer>
          <Category>
            <FiltersAndCategory />
          </Category>
          <DesignCard data={data} />
        </StyleCardContainer>
      </Main>
    </>
  );
}

export default DesignForeCeil;
