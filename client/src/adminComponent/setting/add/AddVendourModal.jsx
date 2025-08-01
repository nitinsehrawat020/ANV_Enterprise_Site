import { useForm } from "react-hook-form";
import {
  StyleModal,
  Title,
  FormContainer,
  WorkerForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextArea,
  ErrorMessage,
  SubmitButton,
} from "./styleAddModal";
import { useAddVendour } from "../../../hooks/useVendour";

function AddVendourModal({ onClick }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { addVendour, isLoading } = useAddVendour();

  const onSubmit = async (data) => {
    try {
      addVendour({ data });
      // Reset form after successful submission
      reset();

      // Close modal after successful submission
      if (onClick) {
        onClick();
      }
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };

  return (
    <StyleModal>
      <Title>
        <h2>Add Vendor</h2>
        <button onClick={onClick}>Close</button>
      </Title>

      <FormContainer>
        <WorkerForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Vendor Name</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter vendor name"
              hasError={errors.name}
              {...register("name", {
                required: "Vendor name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              type="tel"
              placeholder="Enter phone number"
              hasError={errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]+$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Address</FormLabel>
            <FormTextArea
              placeholder="Enter vendor address"
              hasError={errors.address}
              rows={3}
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters",
                },
              })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Vendor"}
          </SubmitButton>
        </WorkerForm>
      </FormContainer>
    </StyleModal>
  );
}

export default AddVendourModal;
