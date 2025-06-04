import Heading from "../../ui/Heading";
import { useUser } from "../LoginAndSignup/useUser";
import {
  AvatarDiv,
  ChangeAvatarConatiner,
  ChnageInfoDiv,
  // ContentConatiner,
  Header,
  StyleAccountInfo,
  StyleAvatar,
  // StyleInput,
} from "./StyleMyAccount";

import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal";

import ChnageAvatarModel from "./ChnageAvatarModel";
import ChangeInforForm from "./ChangeInforForm";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AccountInfo() {
  const navigate = useNavigate();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      toast.error("kindly login");
      navigate("/");
    }
  }, [user, navigate]);

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

        <ChnageInfoDiv>
          <ChangeInforForm />
        </ChnageInfoDiv>
      </StyleAccountInfo>
    </Modal>
  );
}

export default AccountInfo;
