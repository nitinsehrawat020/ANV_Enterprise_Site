import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  StyleModal,
  Title,
  FormContainer,
  WorkerForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextArea,
  FormFileInput,
  ErrorMessage,
  FileHint,
  SubmitButton,
} from "./styleAddModal";
import { useAddDesign } from "../../../hooks/useDesign";
import styled from "styled-components";
import toast from "react-hot-toast";

// Image preview components
const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ImagePreviewItem = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 2px solid var(--color-gray-200);
  border-radius: 8px;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  background: var(--color-orange);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-red-600);
  }
`;

function AddDesignModal({ onClick }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { addDesign } = useAddDesign();

  // Watch for file changes to update preview
  const watchedImages = watch("images");

  // Update preview when files change
  useEffect(() => {
    if (watchedImages && watchedImages.length > 0) {
      const imageUrls = Array.from(watchedImages).map((file) => ({
        file,
        url: URL.createObjectURL(file),
        name: file.name,
      }));
      setSelectedImages(imageUrls);
    } else {
      setSelectedImages([]);
    }
  }, [watchedImages]);

  // Clean up object URLs on component unmount
  useEffect(() => {
    return () => {
      selectedImages.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [selectedImages]);

  const onSubmit = async (data) => {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("designType", data.designType);
    formData.append("designArea", data.designArea);
    formData.append("description", data.description);
    formData.append("rating", data.rating);

    // Handle multiple file uploads
    if (data.images && data.images.length > 0) {
      // Validate max 5 images
      if (data.images.length > 5) {
        toast.error("Maximum 5 images are allowed");
        return;
      }

      // Append each image with the same field name for server handling
      Array.from(data.images).forEach((file) => {
        formData.append("images", file);
      });
    }

    addDesign({ data: formData });

    // Clean up image previews
    selectedImages.forEach((img) => URL.revokeObjectURL(img.url));
    setSelectedImages([]);

    reset();

    if (onClick) {
      onClick();
    }
  };

  return (
    <StyleModal>
      <Title>
        <h2>Add Design</h2>
        <button onClick={onClick}>Close</button>
      </Title>

      <FormContainer>
        <WorkerForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Design Title</FormLabel>
            <FormInput
              type="text"
              hasError={errors.title}
              {...register("title", {
                required: "Design title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Design Type</FormLabel>
            <FormSelect
              hasError={errors.designType}
              {...register("designType", {
                required: "Design type is required",
              })}
            >
              <option value="">Select design type</option>
              <option value="molding">Molding</option>
              <option value="false-ceil">False Ceiling</option>
            </FormSelect>
            {errors.designType && (
              <ErrorMessage>{errors.designType.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Design Area</FormLabel>
            <FormSelect
              hasError={errors.designArea}
              {...register("designArea", {
                required: "Design area is required",
              })}
            >
              <option value="">Select design area</option>
              <option value="living room">Living Room</option>
              <option value="hall">Hall</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="wall">Wall</option>
            </FormSelect>
            {errors.designArea && (
              <ErrorMessage>{errors.designArea.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Description</FormLabel>
            <FormTextArea
              hasError={errors.description}
              rows={4}
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Description must be at least 10 characters",
                },
              })}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Rating</FormLabel>
            <FormSelect
              hasError={errors.rating}
              {...register("rating", {
                required: "Rating is required",
              })}
            >
              <option value="">Select rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </FormSelect>
            {errors.rating && (
              <ErrorMessage>{errors.rating.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Design Images (Max 5)</FormLabel>
            <FormFileInput
              type="file"
              accept="image/*"
              multiple
              {...register("images", {
                required: "At least one design image is required",
                validate: {
                  maxFiles: (files) => {
                    if (!files || files.length === 0)
                      return "At least one image is required";
                    if (files.length > 5) return "Maximum 5 images are allowed";
                    return true;
                  },
                  fileSize: (files) => {
                    if (!files) return true;
                    const maxSize = 5 * 1024 * 1024; // 5MB per file
                    const oversizedFiles = Array.from(files).filter(
                      (file) => file.size > maxSize
                    );
                    if (oversizedFiles.length > 0) {
                      return `Some files are too large. Maximum size per file is 5MB`;
                    }
                    return true;
                  },
                },
              })}
            />
            <FileHint>
              Upload design images (JPG, PNG, WebP) - Maximum 5 files, 5MB each
            </FileHint>
            {errors.images && (
              <ErrorMessage>{errors.images.message}</ErrorMessage>
            )}

            {/* Image Preview Section */}
            {selectedImages.length > 0 && (
              <ImagePreviewContainer>
                {selectedImages.map((img, index) => (
                  <ImagePreviewItem key={index}>
                    <PreviewImage src={img.url} alt={`Preview ${index + 1}`} />
                    <RemoveImageButton
                      type="button"
                      onClick={() => {
                        URL.revokeObjectURL(img.url);
                        const newImages = selectedImages.filter(
                          (_, i) => i !== index
                        );
                        setSelectedImages(newImages);
                        // Also need to update the form field
                        const dt = new DataTransfer();
                        newImages.forEach((_, i) => {
                          if (watchedImages[i]) dt.items.add(watchedImages[i]);
                        });
                        const fileInput = document.querySelector(
                          'input[type="file"][multiple]'
                        );
                        if (fileInput) fileInput.files = dt.files;
                      }}
                      title="Remove image"
                    >
                      ×
                    </RemoveImageButton>
                  </ImagePreviewItem>
                ))}
              </ImagePreviewContainer>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Design"}
          </SubmitButton>
        </WorkerForm>
      </FormContainer>
    </StyleModal>
  );
}

export default AddDesignModal;
