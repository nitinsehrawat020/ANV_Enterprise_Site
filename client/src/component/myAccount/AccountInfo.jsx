import Heading from "../../ui/Heading";
import { Divider } from "../navbar/StyleNavBar";
import { useUser } from "../LoginAndSignup/useUser";
import {
  AvatarDiv,
  ChangeAvatarConatiner,
  // ContentConatiner,
  Header,
  InfoForm,
  StyleAccountInfo,
  StyleAvatar,
  // StyleInput,
} from "./StyleMyAccount";
import { useForm } from "react-hook-form";
import { Label, StyledInput } from "../LoginAndSignup/StyleLogin";
import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal";

import ChnageAvatarModel from "./ChnageAvatarModel";

function AccountInfo() {
  const { user, isLoading } = useUser();

  const { register, handleSubmit } = useForm();

  if (isLoading) {
    return <div>Loading account information...</div>;
  }

  return (
    <Modal>
      <StyleAccountInfo>
        <Header>
          <Heading as="h2">Account Information</Heading>
        </Header>

        <ChangeAvatarConatiner>
          <StyleAvatar>
            <AvatarDiv>
              <img
                src={user?.avatar || "/default-avatar.png"}
                alt="Current Avatar"
              />
            </AvatarDiv>
            <Modal.Open open="changeAvatar">
              <Button variant="filled">Change Avatar</Button>
            </Modal.Open>

            <Modal.Window open="changeAvatar">
              <ChnageAvatarModel />
            </Modal.Window>
          </StyleAvatar>
        </ChangeAvatarConatiner>

        <InfoForm onSubmit={handleSubmit}>
          <p>
            <Label htmlFor="firstName">First Name</Label>
            <StyledInput
              type="text"
              placeholder="First Name"
              id="firstName"
              {...register("firstName")}
            />
          </p>
          <p>
            <Label htmlFor="lastName">Last Name</Label>
            <StyledInput
              type="text"
              placeholder="Last Name"
              id="lastName"
              {...register("lastName")}
            />
          </p>
          <p>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <StyledInput
              type="number"
              placeholder="Phone Number"
              id="phoneNumber"
              {...register("mobileNumber")}
            />
          </p>
          <p>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
            />
          </p>
          <span>
            <Label htmlFor="address">Address</Label>
            <StyledInput
              type="text"
              placeholder="Address"
              id="address"
              {...register("addressDetails")}
            />
          </span>
        </InfoForm>
      </StyleAccountInfo>
    </Modal>
  );
}

export default AccountInfo;
