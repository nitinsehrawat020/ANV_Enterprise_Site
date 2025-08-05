import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useChangeAvatar } from "../../LoginAndSignup/useUser";
import { ButtonLoader } from "../../../ui/Loader";
import {
  ImageUploadContainer,
  UploadTitle,
  ImagePreviewContainer,
  ImagePreview,
  FileInputContainer,
  FileInputWrapper,
  FileInput,
  FileInputButton,
  UploadButtonGroup,
  CancelButton,
  StyledButtonLoader,
} from "../StyleMyAccount";

const ImageUpload = ({ currentAvatar, onCloseModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(currentAvatar || null);
  const { changeAvatar, isLoading } = useChangeAvatar();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setSelectedFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    // Send the file directly to server
    changeAvatar(selectedFile, {
      onSettled: () => onCloseModal(),
    });
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewUrl(currentAvatar);
    onCloseModal();
  };

  return (
    <ImageUploadContainer>
      <UploadTitle>Upload Profile Picture</UploadTitle>

      <ImagePreviewContainer>
        <ImagePreview src={previewUrl}>
          {!previewUrl && "No image selected"}
        </ImagePreview>
      </ImagePreviewContainer>

      <FileInputContainer>
        <FileInputWrapper>
          <FileInput
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleFileSelect}
          />
          <FileInputButton htmlFor="avatar-upload">
            <FaUpload />
            Choose Image
          </FileInputButton>
        </FileInputWrapper>
        {selectedFile && (
          <p
            style={{
              fontSize: "14px",
              color: "var(--color-gray-600)",
              margin: "8px 0 0 0",
            }}
          >
            Selected: {selectedFile.name}
          </p>
        )}
      </FileInputContainer>

      <UploadButtonGroup>
        <CancelButton type="button" onClick={handleCancel}>
          Cancel
        </CancelButton>
        <StyledButtonLoader
          as={ButtonLoader}
          type="button"
          onClick={handleUpload}
          disabled={!selectedFile}
          isLoading={isLoading}
          $hasFile={!!selectedFile}
          $isLoading={isLoading}
        >
          Save Image
        </StyledButtonLoader>
      </UploadButtonGroup>
    </ImageUploadContainer>
  );
};

export default ImageUpload;
