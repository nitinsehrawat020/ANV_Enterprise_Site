import { Rating } from "@mui/material";
import {
  Content,
  Describtion,
  Fotter,
  Header,
  ImageContainer,
  InformationContainer,
} from "../design/styleDesignFalseCeil";

function DesignInformation({ selectedItem }) {
  return (
    <>
      <InformationContainer>
        <ImageContainer>
          <img src={selectedItem.image} alt={selectedItem.title} />
        </ImageContainer>
        <Content>
          <Header>
            <h2>{selectedItem.title}</h2>
            <span>{selectedItem.designArea}</span>
          </Header>
          <Describtion>
            <p>{selectedItem.description}</p>
          </Describtion>
          <Fotter>
            <span>Estimate Finish Time {selectedItem.ETA}</span>
            Rating
            <Rating
              name="half-rating-read"
              defaultValue={selectedItem.rating}
              getLabelText={(name) => `rating value ${name}`}
              precision={0.1}
              readOnly
              sx={{
                fontSize: 0.8 + "rem",
                backgroundColor: "#FFD057",
                color: "#000000",
                padding: 0.2 + "rem",
                borderRadius: 5 + "px",
              }}
            />
          </Fotter>
        </Content>
      </InformationContainer>
    </>
  );
}

export default DesignInformation;
