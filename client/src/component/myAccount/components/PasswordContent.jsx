import { useForm } from "react-hook-form";
import { useChangePassword } from "../../LoginAndSignup/useUser";
import {
  AccountHeading,
  ProfileForm,
  StyleInput,
  StyleLabel,
  StyleSubmitFormButton,
} from "../StyleMyAccount";

const PasswordContent = () => {
  const { changePassword, isLoading } = useChangePassword();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    changePassword(data);
  };

  return (
    <>
      <AccountHeading>Change Password</AccountHeading>
      <ProfileForm onSubmit={handleSubmit(onSubmit)}>
        <p>
          <StyleLabel>Old Password</StyleLabel>
          <StyleInput type="password" {...register("curPassword")} />
        </p>
        <p>
          <StyleLabel>New Password</StyleLabel>
          <StyleInput type="password" {...register("newPassword")} />
        </p>
        <p>
          <StyleLabel>Confirm New Password</StyleLabel>
          <StyleInput type="password" {...register("confirmedNewPassword")} />
        </p>
        <StyleSubmitFormButton
          type="submit"
          value="Change Password"
          disabled={isLoading}
        />
        <span> Forgot Password</span>
      </ProfileForm>
    </>
  );
};

export default PasswordContent;
