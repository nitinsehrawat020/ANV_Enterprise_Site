import { useForm } from "react-hook-form";
import { formatDate } from "../../util/helper";
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
} from "../setting/add/styleAddModal";

function AddWorkerModal({ workerData = [] }) {
  const todayDates = formatDate(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      join: todayDates,
    },
  });

  const onSubmit = (data) => {
    workerData.push({
      id: workerData.length + 1,
      name: data.name,
      phone_number: data.phone_number,
      join: data.join,
      member_type: data.member_type,
      active_status: data.active_status,
      payment: {
        totalSalery: 0,
        weeklyGiven: 0,
        advance: 0,
        get due() {
          return this.totalSalery - this.weeklyGiven;
        },
      },
      paymentLog: [],
      attendance: {},
    });

    reset();
  };

  return (
    <StyleModal>
      <Title>
        <h2>Add Worker</h2>
      </Title>
      <FormContainer>
        <WorkerForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Worker Name</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter worker name"
              hasError={errors.name}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter phone number"
              hasError={errors.phone_number}
              {...register("phone_number", {
                required: "Phone number is required",
              })}
            />
            {errors.phone_number && (
              <ErrorMessage>{errors.phone_number.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Join Date</FormLabel>
            <FormInput
              type="date"
              hasError={errors.join}
              {...register("join", { required: "Join date is required" })}
            />
            {errors.join && <ErrorMessage>{errors.join.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <FormLabel>Member Type</FormLabel>
            <FormSelect
              hasError={errors.member_type}
              {...register("member_type", {
                required: "Member type is required",
              })}
            >
              <option value="">Select member type</option>
              <option value="worker">Worker</option>
              <option value="helper">Helper</option>
            </FormSelect>
            {errors.member_type && (
              <ErrorMessage>{errors.member_type.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Active Status</FormLabel>
            <FormSelect
              hasError={errors.active_status}
              {...register("active_status", {
                required: "Active status is required",
              })}
            >
              <option value="">Select status</option>
              <option value="true">Active</option>
              <option value="false">Not Active</option>
            </FormSelect>
            {errors.active_status && (
              <ErrorMessage>{errors.active_status.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Profile Image</FormLabel>
            <FormFileInput
              type="file"
              accept="image/*"
              {...register("image")}
            />
            <FileHint>Upload a profile image (optional)</FileHint>
          </FormGroup>

          <SubmitButton type="submit">Add Worker</SubmitButton>
        </WorkerForm>
      </FormContainer>
    </StyleModal>
  );
}

export default AddWorkerModal;
