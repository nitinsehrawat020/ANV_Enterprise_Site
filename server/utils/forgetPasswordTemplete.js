const forgetPasswordTemplate = ({ name, otp }) => {
  return `
  <div>
    <p>dear ,${name}</p>
    <p> You're request a password reset, please use the following otp code to reset your password </p>
    <div style="background:yellow; font-size :20px; padding:20px; text-align:center; font-weight:800;">
        ${otp}
    </div>
    <p>this otp is only valid  for 10 minutes only. Enter this otp iin the ANV Enterprise website to proceed wih resetting your password</p>
    </br>
    </br>
    <p>Thanks</p>
    <p>ANV Enterprise</p>
  </div>

  `;
};

export default forgetPasswordTemplate;
