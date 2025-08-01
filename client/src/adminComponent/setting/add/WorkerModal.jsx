import { useForm } from "react-hook-form";
import Heading from "../../../ui/Heading";
import {
  StyleModal,
  Title,
  FormContainer,
  WorkerForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormFileInput,
  ErrorMessage,
  FileHint,
  SubmitButton,
} from "./styleAddModal";
import { useAddWorker } from "../../../hooks/useWorker";

function WorkerModal({ onClick }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { addWorker, isAddingWorker } = useAddWorker();

  const onSubmit = async (data) => {
    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("joinDate", data.joinDate);
      formData.append("memberType", data.memberType);

      // Handle file upload
      if (data.aadharCard && data.aadharCard[0]) {
        formData.append("addharCard", data.aadharCard[0]);
        console.log(
          "File added:",
          data.aadharCard[0].name,
          data.aadharCard[0].size
        );
      }

      // Debug: Log FormData contents
      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      console.log("Worker data:", {
        name: data.name,
        phoneNumber: data.phoneNumber,
        joinDate: data.joinDate,
        memberType: data.memberType,
        aadharCard: data.aadharCard[0]?.name || null,
      });

      // Call API with FormData
      addWorker({ data: formData });

      reset();
      onClick(); // Close modal
    } catch (error) {
      console.error("Error adding worker:", error);
      alert("Error adding worker. Please try again.");
    }
  };

  return (
    <StyleModal>
      <Title>
        <Heading as="h2">Add Worker</Heading>
        <button onClick={onClick}>Close</button>
      </Title>

      <FormContainer>
        <WorkerForm onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <FormGroup>
            <FormLabel htmlFor="name">Worker Name *</FormLabel>
            <FormInput
              id="name"
              type="text"
              placeholder="Enter worker's full name"
              hasError={!!errors.name}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          {/* Phone Number Field */}
          <FormGroup>
            <FormLabel htmlFor="phoneNumber">Phone Number *</FormLabel>
            <FormInput
              id="phoneNumber"
              type="tel"
              placeholder="Enter 10-digit phone number"
              hasError={!!errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </FormGroup>

          {/* Join Date Field */}
          <FormGroup>
            <FormLabel htmlFor="joinDate">Join Date *</FormLabel>
            <FormInput
              id="joinDate"
              type="date"
              hasError={!!errors.joinDate}
              {...register("joinDate", {
                required: "Join date is required",
              })}
            />
            {errors.joinDate && (
              <ErrorMessage>{errors.joinDate.message}</ErrorMessage>
            )}
          </FormGroup>

          {/* Member Type Field */}
          <FormGroup>
            <FormLabel htmlFor="memberType">Member Type *</FormLabel>
            <FormSelect
              id="memberType"
              hasError={!!errors.memberType}
              {...register("memberType", {
                required: "Member type is required",
              })}
            >
              <option value="">Select member type</option>
              <option value="worker">Worker</option>
              <option value="helper">Helper</option>
            </FormSelect>
            {errors.memberType && (
              <ErrorMessage>{errors.memberType.message}</ErrorMessage>
            )}
          </FormGroup>

          {/* Aadhar Card File Field */}
          <FormGroup>
            <FormLabel htmlFor="aadharCard">Aadhar Card (Optional)</FormLabel>
            <FormFileInput
              id="aadharCard"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("aadharCard")}
            />
            <FileHint>Accepted formats: JPG, JPEG, PNG</FileHint>
          </FormGroup>

          {/* Submit Button */}
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding Worker..." : "Add Worker"}
          </SubmitButton>
        </WorkerForm>
      </FormContainer>
    </StyleModal>
  );
}

export default WorkerModal;
