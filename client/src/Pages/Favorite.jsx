import DesignCard from "../component/design/DesignCard";
import { StyleCardContainer } from "../component/design/styleDesignFalseCeil";
import { useUserFavdesign } from "../component/design/useDesign";
import {
  Container,
  DesignContainer,
  LoginNavLink,
  LogoutContainer,
} from "../component/favorite/styleFavorite";
import { useUser } from "../component/LoginAndSignup/useUser";
import { NavLinks } from "../component/navbar/StyleNavBar";
import Heading from "../ui/Heading";

function Favorite() {
  const { user } = useUser();
  const { favDesignInfo, isLoading } = useUserFavdesign();

  if (!user)
    return (
      <Container>
        <LogoutContainer>
          Please login to see and add your fav design
          <LoginNavLink to="/login">login</LoginNavLink>
        </LogoutContainer>
      </Container>
    );

  return (
    <Container>
      <DesignContainer>
        <Heading as="h2">Favorite Designs</Heading>
        <DesignCard data={favDesignInfo} />
      </DesignContainer>
    </Container>
  );
}

export default Favorite;
