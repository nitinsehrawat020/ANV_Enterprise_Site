import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";

const Embla = styled.div`
  display: flex;
  overflow: hidden;
  width: 80%; /* Adjust to parent width */
  height: 80%; /* Adjust to parent height */
  text-align: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
    height: 80%;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 80%;
  }
`;

const Embla__container = styled.div`
  display: flex;
  width: 100%; /* Ensure container takes full width */
  height: 100%; /* Ensure container takes full height */
`;

const Embla__slide = styled.div`
  flex: 0 0 100%; /* Slide covers 100% of the container */

  img {
    width: 100%; /* Adjust image to slide width */
    height: 100%; /* Adjust image to slide height */
    //Ensure image covers the slide
  }
`;

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <Embla ref={emblaRef}>
      <Embla__container>
        <Embla__slide>
          <img src="/pictures/banner/image1.webp" alt="Slide 1" />
        </Embla__slide>
        <Embla__slide>
          <img src="/pictures/banner/image2.webp" alt="Slide 2" />
        </Embla__slide>
        <Embla__slide>
          <img src="/pictures/banner/image3.webp" alt="Slide 3" />
        </Embla__slide>
      </Embla__container>
    </Embla>
  );
}

export default Carousel;
