import { useForm } from "react-hook-form";
import Heading from "../../../ui/Heading";
import {
  StyleModal,
  Title,
  FormContainer,
  SiteForm,
  SiteFormGrid,
  FormSection,
  SectionTitle,
  FormGroup,
  FormRow,
  FormLabel,
  FormInput,
  FormTextArea,
  FormSelect,
  ErrorMessage,
  SubmitButton,
} from "./styleAddModal";
import { useAddSite } from "../../../hooks/useSite";

function AddSiteModal({ onClick }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { addSite, isAddingSite } = useAddSite();
  const onSubmit = async (data) => {
    try {
      console.log("Site data:", data);

      addSite({ data });

      reset();

      onClick(); // Close modal
    } catch (error) {
      console.error("Error adding site:", error);
    }
  };

  return (
    <StyleModal>
      <Title>
        <Heading as="h2">Add Site</Heading>
        <button onClick={onClick}>Close</button>
      </Title>

      <FormContainer>
        <SiteForm onSubmit={handleSubmit(onSubmit)}>
          <SiteFormGrid>
            {/* Basic Site Information */}
            <FormSection>
              <SectionTitle>Basic Information</SectionTitle>

              <FormGroup>
                <FormLabel htmlFor="siteName">Site Name *</FormLabel>
                <FormInput
                  id="name"
                  type="text"
                  hasError={!!errors.siteName}
                  {...register("name", {
                    required: "Site name is required",
                    minLength: {
                      value: 2,
                      message: "Site name must be at least 2 characters",
                    },
                  })}
                />
                {errors.siteName && (
                  <ErrorMessage>{errors.siteName.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="address">Address *</FormLabel>
                <FormTextArea
                  id="address"
                  hasError={!!errors.address}
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

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="totalPayment">Total Payment *</FormLabel>
                  <FormInput
                    id="totalPayment"
                    type="number"
                    hasError={!!errors.totalPayment}
                    {...register("totalPayment", {
                      required: "Total payment is required",
                      min: {
                        value: 1,
                        message: "Total payment must be greater than 0",
                      },
                    })}
                  />
                  {errors.totalPayment && (
                    <ErrorMessage>{errors.totalPayment.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="userEmail">User Email *</FormLabel>
                  <FormInput
                    id="userEmail"
                    type="email"
                    hasError={!!errors.userEmail}
                    {...register("userEmail", {
                      required: "User email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.userEmail && (
                    <ErrorMessage>{errors.userEmail.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
            </FormSection>

            {/* Building Information */}
            <FormSection>
              <SectionTitle>Building Information</SectionTitle>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="workType">Work Type *</FormLabel>
                  <FormSelect
                    id="workType"
                    hasError={!!errors.workType}
                    {...register("workType", {
                      required: "Work type is required",
                    })}
                  >
                    <option value="">Select work type</option>
                    <option value="false_ceiling">False Ceiling</option>
                    <option value="molding">Molding</option>
                  </FormSelect>
                  {errors.workType && (
                    <ErrorMessage>{errors.workType.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="type">Property Type *</FormLabel>
                  <FormSelect
                    id="type"
                    hasError={!!errors.propertyType}
                    {...register("type", {
                      required: "Property type is required",
                    })}
                  >
                    <option value="">Select property type</option>
                    <option value="owner">Owner</option>
                    <option value="rent">Rent</option>
                  </FormSelect>
                  {errors.propertyType && (
                    <ErrorMessage>{errors.propertyType.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
            </FormSection>

            {/* Area Information */}
            <FormSection>
              <SectionTitle>Area Details</SectionTitle>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="area">Total Area (sq ft) *</FormLabel>
                  <FormInput
                    id="area"
                    type="number"
                    hasError={!!errors.area}
                    {...register("area", {
                      required: "Area is required",
                      min: {
                        value: 0,
                        message: "Area must be greater than 0",
                      },
                    })}
                  />
                  {errors.area && (
                    <ErrorMessage>{errors.area.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="floor">Number of Floors *</FormLabel>
                  <FormInput
                    id="floor"
                    type="number"
                    hasError={!!errors.floor}
                    {...register("floor", {
                      required: "Number of floors is required",
                      min: {
                        value: 0,
                        message: "Must have at least 1 floor",
                      },
                    })}
                  />
                  {errors.floor && (
                    <ErrorMessage>{errors.floor.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="rooms">Number of Rooms *</FormLabel>
                  <FormInput
                    id="rooms"
                    type="number"
                    hasError={!!errors.rooms}
                    {...register("rooms", {
                      required: "Number of rooms is required",
                      min: {
                        value: 0,
                        message: "Must have at least 1 room",
                      },
                    })}
                  />
                  {errors.rooms && (
                    <ErrorMessage>{errors.rooms.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="kitchen">Number of Kitchens *</FormLabel>
                  <FormInput
                    id="kitchen"
                    type="number"
                    hasError={!!errors.kitchen}
                    {...register("kitchen", {
                      required: "Number of kitchens is required",
                      min: {
                        value: 0,
                        message: "Must have at least 1 kitchen",
                      },
                    })}
                  />
                  {errors.kitchen && (
                    <ErrorMessage>{errors.kitchen.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="bathroom">
                    Number of Bathrooms *
                  </FormLabel>
                  <FormInput
                    id="bathroom"
                    type="number"
                    hasError={!!errors.bathroom}
                    {...register("bathroom", {
                      required: "Number of bathrooms is required",
                      min: {
                        value: 0,
                        message: "Must have at least 1 bathroom",
                      },
                    })}
                  />
                  {errors.bathroom && (
                    <ErrorMessage>{errors.bathroom.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="hall">Number of Halls *</FormLabel>
                  <FormInput
                    id="hall"
                    type="number"
                    hasError={!!errors.hall}
                    {...register("hall", {
                      required: "Number of halls is required",
                      min: {
                        value: 0,
                        message: "Must have at least 1 hall",
                      },
                    })}
                  />
                  {errors.hall && (
                    <ErrorMessage>{errors.hall.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
            </FormSection>
          </SiteFormGrid>{" "}
          {/* Submit Button */}
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting || isAddingSite ? "Adding Site..." : "Add Site"}
          </SubmitButton>
        </SiteForm>
      </FormContainer>
    </StyleModal>
  );
}

export default AddSiteModal;
