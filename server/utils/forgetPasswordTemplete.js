const forgetPasswordTemplate = ({ name, otp }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset - ANV Enterprise</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 20px; font-family: 'Poppins', Arial, sans-serif; background-color: #f5f3ef; color: #333;">
    
    <div style="max-width: 500px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: #ffaf0f; padding: 30px; text-align: center; color: #fff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">ANV Enterprise</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Password Reset Request</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
            <h2 style="color: #2c2c2c; margin: 0 0 20px 0; font-size: 20px;">
                Hello ${name || "User"}!
            </h2>
            
            <p style="color: #666; margin: 0 0 30px 0; line-height: 1.6;">
                You requested a password reset for your ANV Enterprise account. Use the verification code below:
            </p>

            <!-- OTP -->
            <div style="background: #ffaf0f; color: #fff; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0;">
                <div style="font-size: 32px; font-weight: 600; letter-spacing: 8px; font-family: monospace;">
                    ${otp}
                </div>
                <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Verification Code</p>
            </div>

            <p style="color: #666; margin: 30px 0 0 0; font-size: 14px; line-height: 1.6;">
                • This code expires in 10 minutes<br>
                • Don't share this code with anyone<br>
                • If you didn't request this, ignore this email
            </p>
        </div>

        <!-- Footer -->
        <div style="background: #f8f8f8; padding: 20px 30px; text-align: center; color: #666; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} ANV Enterprise. All rights reserved.</p>
        </div>
    </div>

</body>
</html>
  `;
};

export default forgetPasswordTemplate;
