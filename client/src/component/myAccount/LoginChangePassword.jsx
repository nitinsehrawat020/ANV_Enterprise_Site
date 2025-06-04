import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import {
  ChangePasswordFormContainer,
  Header,
  InfoForm,
  StyleChangePassword,
  StylePasswordHeader,
} from "./StyleMyAccount";
import { Label, StyledInput } from "../LoginAndSignup/StyleLogin";
import { useChangePassword } from "../LoginAndSignup/useUser";

function LoginChangePassword() {
  const { register, handleSubmit, reset } = useForm();
  const { changePassword, isLoading, error } = useChangePassword();

  const onSubmit = async function (data) {
    changePassword(data, { onSettled: () => reset() });
  };

  return (
    <StyleChangePassword>
      <StylePasswordHeader>
        <Heading as="h2"> Change Password</Heading>
      </StylePasswordHeader>
      <ChangePasswordFormContainer>
        <InfoForm onSubmit={handleSubmit(onSubmit)}>
          <p>
            <Label htmlFor="currentPassword">Curent Password</Label>
            <StyledInput
              type="password"
              placeholder="Current Password"
              id="currentPassword"
              {...register("curPassword")}
            />
          </p>
          <p>
            <Label htmlFor="newPassword">New Password</Label>
            <StyledInput
              type="password"
              placeholder="New Password"
              id="newPassword"
              {...register("newPassword")}
            />
          </p>
          <p>
            <Label htmlFor="confirmNewPassword">Confirm Password</Label>
            <StyledInput
              type="password"
              placeholder="Confirm Password"
              id="confirmNewPassword"
              {...register("confirmedNewPassword")}
            />
          </p>
          <StyledInput type="submit" value="Sign up" disabled={isLoading} />
        </InfoForm>
      </ChangePasswordFormContainer>
    </StyleChangePassword>
  );
}

export default LoginChangePassword;
