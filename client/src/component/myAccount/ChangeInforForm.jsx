import { useForm } from "react-hook-form";
import { Label, StyledInput } from "../LoginAndSignup/StyleLogin";
import { EditButton, EditFormContainer, InfoForm } from "./StyleMyAccount";
import { useUpdateUser, useUser } from "../LoginAndSignup/useUser";
import { useState } from "react";
import toast from "react-hot-toast";

function ChangeInforForm() {
  const { user, isLoading } = useUser();
  const { register, handleSubmit } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const { updateUser, isUpdatingUser } = useUpdateUser();

  const onSubmit = async (formData) => {
    const changedData = {};
    let hasChanges = false;

    if (formData.firstName !== user.firstName) {
      changedData.firstName = formData.firstName;
      hasChanges = true;
    }
    if (formData.lastName !== user.lastName) {
      changedData.lastName = formData.lastName;
      hasChanges = true;
    }
    if (+formData.mobileNumber !== user.mobileNumber) {
      changedData.mobileNumber = formData.mobileNumber;
      hasChanges = true;
    }

    if (formData.addressDetails !== user.addressDetails) {
      changedData.addressDetails = formData.addressDetails;
      hasChanges = true;
    }

    if (!hasChanges) {
      toast.error("No changes detected."); // Or use toast.info
      setIsEditable(false); // Optionally disable editing mode
      return;
    }

    // Call updateUser with only the changed data
    updateUser(changedData, {
      onSuccess: () => {
        setIsEditable(false); // Disable editing mode on successful update
        // The user query will refetch, and useEffect will reset the form with new defaults
      },
      // onError: (err) => { /* Handle error if needed */ }
    });
  };
  return (
    <EditFormContainer>
      <EditButton
        variant="filled"
        size={1}
        onClick={() => setIsEditable((prev) => !prev)}
      >
        Edit Details
      </EditButton>
      <InfoForm onSubmit={handleSubmit(onSubmit)}>
        <p>
          <Label htmlFor="firstName">First Name</Label>
          <StyledInput
            type="text"
            placeholder="First Name"
            id="firstName"
            defaultValue={user.firstName}
            disabled={!isEditable}
            {...register("firstName")}
          />
        </p>
        <p>
          <Label htmlFor="lastName">Last Name</Label>
          <StyledInput
            type="text"
            placeholder="Last Name"
            id="lastName"
            defaultValue={user.lastName}
            disabled={!isEditable}
            {...register("lastName")}
          />
        </p>
        <p>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <StyledInput
            type="number"
            placeholder="Phone Number"
            id="phoneNumber"
            defaultValue={user.mobileNumber}
            disabled={!isEditable}
            {...register("mobileNumber")}
          />
        </p>
        <p>
          <Label htmlFor="email">Email</Label>
          <StyledInput
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={user.email}
            disabled
            {...register("email")}
          />
        </p>
        <span>
          <Label htmlFor="address">Address</Label>
          <StyledInput
            type="text"
            placeholder="Address"
            id="address"
            defaultValue={user.addressDetails}
            disabled={!isEditable}
            {...register("addressDetails")}
          />
        </span>
        <StyledInput
          type="submit"
          value="Sign up"
          disabled={isLoading || !isEditable || isUpdatingUser}
        />
      </InfoForm>
    </EditFormContainer>
  );
}

export default ChangeInforForm;
