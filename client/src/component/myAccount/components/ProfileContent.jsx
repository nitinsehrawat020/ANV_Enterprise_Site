import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import Modal from "../../../ui/Modal";
import { useUser, useUpdateUser } from "../../LoginAndSignup/useUser";
import {
  AccountHeading,
  IconBackground,
  ProfileContainer,
  ProfileForm,
  ProfileGroup,
  ProfileImage,
  StyleInput,
  ButtonGroup,
  EditProfileButton,
  StyleSubmitFilledButton,
} from "../StyleMyAccount";
import ImageUpload from "./ImageUpload";

const ProfileContent = () => {
  const { user } = useUser();
  const [editedable, setEditedable] = useState(true);
  const { updateUser } = useUpdateUser();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.mobileNumber,
    },
  });

  const onSubmit = (data) => {
    updateUser({ data });
  };

  return (
    <>
      <AccountHeading>Your Profile</AccountHeading>
      <ProfileGroup>
        <ProfileContainer>
          <ProfileImage url={user.avatar}>
            <Modal>
              <Modal.Open opens="avatar-upload">
                <IconBackground>
                  <FaRegEdit size={24} />
                </IconBackground>
              </Modal.Open>
              <Modal.Window name="avatar-upload">
                <ImageUpload currentAvatar={user.avatar} />
              </Modal.Window>
            </Modal>
          </ProfileImage>
        </ProfileContainer>

        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <StyleInput
            type="text"
            defaultValue={user.firstName}
            disabled={editedable}
            {...register("firstName")}
          />
          <StyleInput
            type="text"
            defaultValue={user.lastName}
            disabled={editedable}
            {...register("lastName")}
          />
          <StyleInput
            type="number"
            defaultValue={user.mobileNumber}
            disabled={editedable}
            {...register("mobileNumber")}
          />
          <ButtonGroup>
            <EditProfileButton onClick={() => setEditedable((prev) => !prev)}>
              Edit Profile <FaRegEdit />
            </EditProfileButton>
            {!editedable && (
              <StyleSubmitFilledButton type="submit" value="Save" />
            )}
          </ButtonGroup>
        </ProfileForm>
      </ProfileGroup>
    </>
  );
};

export default ProfileContent;
