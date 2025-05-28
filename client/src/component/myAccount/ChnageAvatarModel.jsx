import { useEffect, useState } from "react";
import { useChangeAvatar, useUser } from "../LoginAndSignup/useUser";
import toast from "react-hot-toast";
import {
  AvatarButton,
  AvatarDiv,
  ChangeAvatarContainer,
} from "./StyleMyAccount";
import { Button } from "../../ui/Button";

function ChnageAvatarModel() {
  const { user, isLoading } = useUser();
  const [previewUrl, setPreviewUrl] = useState(null);

  const { changeAvatar, isLoading: isChangingAvatar } = useChangeAvatar();

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (user?.avatar) {
      setPreviewUrl(user.avatar);
    }
  }, [user?.avatar]);
  function handleAvatarFileChange(e) {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No File Found!!");
      setSelectedFile(null);
      setPreviewUrl(user?.avatar || null);
      return;
    }
    setSelectedFile(file);

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }

  function handleSubmitAvatar(event) {
    event.preventDefault();
    if (!selectedFile) {
      toast.error("Please select an image file first.");
      return;
    }

    changeAvatar(selectedFile, {
      onSuccess: (data) => {
        setSelectedFile(null);
      },
      onError: (err) => {
        toast.error(err.message || "Failed to change avatar.");
      },
    });
  }
  return (
    <ChangeAvatarContainer>
      <AvatarDiv>
        <form onSubmit={handleSubmitAvatar}>
          <label htmlFor="changeAvatarInput">
            <img
              src={previewUrl || user?.avatar}
              alt="Avatar Preview"
              style={{
                cursor: "pointer",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
          </label>
          <input
            onChange={handleAvatarFileChange}
            type="file"
            id="changeAvatarInput"
            accept="image/*"
            hidden
          />
          <label htmlFor="changeAvatarInput">
            <AvatarButton>Select Avatar</AvatarButton>
          </label>
          <AvatarButton
            type="submit"
            variant="filled"
            size={0.8}
            disabled={isChangingAvatar || !selectedFile}
          >
            {isChangingAvatar ? "Changing..." : "Change Avatar"}
          </AvatarButton>
        </form>
      </AvatarDiv>
    </ChangeAvatarContainer>
  );
}

export default ChnageAvatarModel;
