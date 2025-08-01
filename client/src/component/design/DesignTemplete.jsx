import {
  CardButton,
  CardDesc,
  CardDesignContainer,
  CardDetails,
  CardHeading,
  CardInfo,
  DesignCard,
  DesignContainer,
  DesignFilter,
  DesignFilterContainer,
  DesignFilterSelect,
  DesignImage,
  DesignOption,
  HeadingImage,
  HeadingPara,
  HeadingTitle,
  StyleDesignTemplete,
} from "./styleDesignTemplete";

import { GrFavorite } from "react-icons/gr";
import { LiaFilterSolid } from "react-icons/lia";

function DesignTemplete({ type, designs }) {
  const categoryOption = [
    "All Category",
    "Hall",
    "Bedrooms",
    "Kitchen",
    "Bathroom",
    "Walls",
  ];

  return (
    <StyleDesignTemplete>
      <HeadingImage>
        <HeadingTitle>{type}</HeadingTitle>
        <HeadingPara>
          Your search for the perfect POP {type} design to enhance your dream
          home ends here. Simply choose a design, sit back with a cup of tea,
          and let us work our magic. Explore a wide variety of styles tailored
          to your needs—use the category filters to easily find exactly what
          you&#39;re looking for.
        </HeadingPara>
      </HeadingImage>

      <DesignContainer>
        <DesignFilterContainer>
          <DesignFilter>
            <LiaFilterSolid size={"28"} />
            <DesignFilterSelect id="designFilter">
              {categoryOption.map((category) => (
                <DesignOption key={category} value={category}>
                  {category}
                </DesignOption>
              ))}
            </DesignFilterSelect>
          </DesignFilter>
        </DesignFilterContainer>
        <CardDesignContainer>
          {designs?.length === 0 ? (
            <div>No design currently available</div>
          ) : (
            designs?.map((design) => (
              <DesignCard key={design.id || design._id}>
                <DesignImage img={design.image}>
                  <span>
                    <GrFavorite />
                  </span>
                  <p>{design.designArea}</p>
                </DesignImage>
                <CardDetails>
                  <CardInfo>
                    <CardHeading>{design.title}</CardHeading>
                    <CardDesc>{design.description}</CardDesc>
                  </CardInfo>
                  <CardButton>View Details</CardButton>
                </CardDetails>
              </DesignCard>
            ))
          )}
        </CardDesignContainer>
      </DesignContainer>
    </StyleDesignTemplete>
  );
}

export default DesignTemplete;
