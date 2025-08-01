import { useForm } from "react-hook-form";
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

function AddDesignModal({ onClick }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { addDesign, isAddingDesign } = useAddDesign();

  const onSubmit = async (data) => {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("designType", data.designType);
    formData.append("designArea", data.designArea);
    formData.append("description", data.description);
    formData.append("rating", data.rating);

    // Handle file upload
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    addDesign({ data: formData });

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
            <FormLabel>Design Image</FormLabel>
            <FormFileInput
              type="file"
              accept="image/*"
              {...register("image", {
                required: "Design image is required",
              })}
            />
            <FileHint>Upload a design image (JPG, PNG, WebP)</FileHint>
            {errors.image && (
              <ErrorMessage>{errors.image.message}</ErrorMessage>
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
