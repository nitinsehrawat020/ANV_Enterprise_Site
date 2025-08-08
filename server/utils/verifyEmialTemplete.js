const verifyEmailTemplate = ({ name, url }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - ANV Enterprise</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 20px; font-family: 'Poppins', Arial, sans-serif; background-color: #f5f3ef; color: #333;">
    
    <div style="max-width: 500px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: #ffaf0f; padding: 30px; text-align: center; color: #fff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">ANV Enterprise</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Email Verification Required</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
            <h2 style="color: #2c2c2c; margin: 0 0 20px 0; font-size: 20px;">
                Hello ${name || "User"}!
            </h2>
            
            <p style="color: #666; margin: 0 0 20px 0; line-height: 1.6;">
                Thank you for registering with ANV Enterprise. To complete your account setup and ensure security, please verify your email address.
            </p>

            <!-- Verify Button -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="${url}" style="display: inline-block; background: #ffaf0f; color: #fff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(255, 175, 15, 0.3);">
                    ✅ Verify My Email
                </a>
            </div>

            <p style="color: #666; margin: 30px 0 0 0; font-size: 14px; line-height: 1.6;">
                • This verification link is secure and unique to your account<br>
                • The link will expire for security reasons<br>
                • If you didn't create this account, please ignore this email
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

export default verifyEmailTemplate;
