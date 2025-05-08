import { CardContainer } from "./ShopingStyle";

function TitleCard({ src }) {
  return (
    <CardContainer>
      <img src={src} />
    </CardContainer>
  );
}

export default TitleCard;
