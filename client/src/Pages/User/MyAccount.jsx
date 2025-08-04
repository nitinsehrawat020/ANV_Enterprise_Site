import { useLocation } from "react-router-dom";
import {
  AccountHeading,
  IconBackground,
  ProfileContainer,
  ProfileForm,
  ProfileGroup,
  ProfileImage,
  SelectButton,
  SelectContentContainer,
  SelectedContent,
  StyleMyAccount,
  StyleInput,
  ButtonGroup,
  EditProfileButton,
  TConatiner,
  THeader,
  TBody,
  TR,
  TH,
  TD,
  TWrapper,
  StyleLabel,
  StyleSubmitFormButton,
  StyleSubmitFilledButton,
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
} from "../../component/myAccount/StyleMyAccount";

import {
  FaUser,
  FaShoppingCart,
  FaLock,
  FaEye,
  FaUpload,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  useChangeAvatar,
  useChangePassword,
  useUpdateUser,
  useUser,
} from "../../component/LoginAndSignup/useUser";

import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { ButtonLoader } from "../../ui/Loader";
import useTablet from "../../hooks/useTablet";
import useMobile from "../../hooks/useMobile";
import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";

function MyAccount() {
  const location = useLocation();
  const { isTablet } = useTablet();
  const { isMobile } = useMobile();

  const renderContent = () => {
    const path = location.pathname;

    switch (path) {
      case "/my-account/profile":
        return <ProfileContent />;
      case "/my-account/order-history":
        return <OrderHistoryContent />;
      case "/my-account/password":
        return <PasswordContent />;
      case "/my-account/payment-history":
        return <PaymentHistoryContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <StyleMyAccount>
      {!isTablet && !isMobile && (
        <SelectContentContainer>
          <SelectButton to="/my-account/profile">
            <FaUser />
            Profile
          </SelectButton>
          <SelectButton to="/my-account/order-history">
            <FaShoppingCart />
            Order History
          </SelectButton>
          <SelectButton to="/my-account/password">
            <FaLock />
            Password
          </SelectButton>
          <SelectButton to="/my-account/payment-history">
            <FaIndianRupeeSign />
            Payment History
          </SelectButton>
        </SelectContentContainer>
      )}
      <SelectedContent>{renderContent()}</SelectedContent>
    </StyleMyAccount>
  );
}

export default MyAccount;

const ProfileContent = () => {
  const { user } = useUser();
  const [editedable, setEditedable] = useState(true);
  const { updateUser } = useUpdateUser();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.mobileNumber,
    },
  });

  const onSubmit = (data) => {
    updateUser({ data });
  };

  return (
    <>
      <AccountHeading>Your Profile</AccountHeading>
      <ProfileGroup>
        <ProfileContainer>
          <ProfileImage url={user.avatar}>
            <Modal>
              <Modal.Open opens="avatar-upload">
                <IconBackground>
                  <FaRegEdit size={24} />
                </IconBackground>
              </Modal.Open>
              <Modal.Window name="avatar-upload">
                <ImageUpload currentAvatar={user.avatar} />
              </Modal.Window>
            </Modal>
          </ProfileImage>
        </ProfileContainer>

        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <StyleInput
            type="text"
            defaultValue={user.firstName}
            disabled={editedable}
            {...register("firstName")}
          />
          <StyleInput
            type="text"
            defaultValue={user.lastName}
            disabled={editedable}
            {...register("lastName")}
          />
          <StyleInput
            type="number"
            defaultValue={user.mobileNumber}
            disabled={editedable}
            {...register("mobileNumber")}
          />
          <ButtonGroup>
            <EditProfileButton onClick={() => setEditedable((prev) => !prev)}>
              Edit Profile <FaRegEdit />
            </EditProfileButton>
            {!editedable && (
              <StyleSubmitFilledButton type="submit" value="Save" />
            )}
          </ButtonGroup>
        </ProfileForm>
      </ProfileGroup>
    </>
  );
};

const OrderHistoryContent = () => {
  // Sample order data - replace with actual data from your API
  const orders = [
    {
      id: 1,
      siteName: "Modern Kitchen Design Project - Complete Interior Renovation",
      status: "Completed",
      amount: "₹25,000",
    },
    {
      id: 2,
      siteName: "Living Room Interior Design",
      status: "In Progress",
      amount: "₹45,000",
    },
    {
      id: 3,
      siteName: "Bedroom Makeover",
      status: "Pending",
      amount: "₹18,500",
    },
    {
      id: 4,
      siteName: "Office Space Design",
      status: "Cancelled",
      amount: "₹32,000",
    },
  ];

  return (
    <>
      <AccountHeading>Order History</AccountHeading>
      <TWrapper>
        <TConatiner>
          <THeader>
            <TR>
              <TH>Site Name</TH>
              <TH>Status</TH>
              <TH>Amount</TH>
              <TH>Details</TH>
            </TR>
          </THeader>
          <TBody>
            {orders.map((order) => (
              <TR key={order.id}>
                <TD>{order.siteName}</TD>
                <TD>{order.status}</TD>
                <TD>{order.amount}</TD>
                <TD color={true}>
                  <FaEye size={16} title="View Details" />
                </TD>
              </TR>
            ))}
          </TBody>
        </TConatiner>
      </TWrapper>
    </>
  );
};

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

const PaymentHistoryContent = () => {
  const orders = [
    {
      id: 1,
      siteName: "Modern Kitchen Design Project - Complete Interior Renovation",
      status: "Completed",
      amount: "₹25,000",
      To: "Vijender",
    },
    {
      id: 2,
      siteName: "Living Room Interior Design",
      status: "In Progress",
      amount: "₹45,000",
      To: "Nitin",
    },
    {
      id: 3,
      siteName: "Bedroom Makeover",
      status: "Pending",
      amount: "₹18,500",
      To: "Vijender",
    },
    {
      id: 4,
      siteName: "Office Space Design",
      status: "Cancelled",
      amount: "₹32,000",
      To: "Nitin",
    },
  ];

  return (
    <>
      <AccountHeading>Payment History</AccountHeading>
      <TWrapper>
        <TConatiner>
          <THeader>
            <TR>
              <TH>Site Name</TH>
              <TH>Date</TH>
              <TH>Amount</TH>
              <TH>Paid To</TH>
            </TR>
          </THeader>
          <TBody>
            {orders.map((order) => (
              <TR key={order.id}>
                <TD>{order.siteName}</TD>
                <TD>{order.status}</TD>
                <TD>{order.amount}</TD>
                <TD color={false}>{order.To}</TD>
              </TR>
            ))}
          </TBody>
        </TConatiner>
      </TWrapper>
    </>
  );
};

const ImageUpload = ({ currentAvatar, onUpload, onCloseModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(currentAvatar || null);
  const { changeAvatar, isLoading, error } = useChangeAvatar();

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
