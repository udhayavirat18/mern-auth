export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Confirm Your Email</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #29243C; max-width: 620px; margin: 0 auto; padding: 25px; background: #F8F5FC;">
  <header style="background: linear-gradient(90deg, #8e44ad, #e056fd); padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: #FFF3FF; margin: 0; font-weight: 700;">Email Confirmation</h1>
  </header>
  <main style="background: #ffffff; padding: 30px 35px; border-radius: 0 0 10px 10px; box-shadow: 0 10px 18px rgba(142, 68, 173, 0.15);">
    <p>Hello,</p>
    <p>Thanks for joining us! Your verification code is:</p>
    <div style="text-align: center; margin: 40px 0;">
      <span style="font-size: 36px; font-weight: bold; color: #a029eb; letter-spacing: 8px; user-select: all;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p><em>This code expires in 15 minutes for your security.</em></p>
    <p>If you did not register, you may disregard this message.</p>
    <p>Cheers,<br />The Awesome Team</p>
  </main>
  <footer style="text-align: center; margin-top: 25px; font-size: 0.75em; color: #999;">This is an automated message, please do not reply.</footer>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Password Successfully Changed</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #2C2C2C; max-width: 620px; margin: 0 auto; padding: 25px; background: #FDF7FE;">
  <header style="background: linear-gradient(90deg, #e056fd, #9b59b6); padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: #FFF3FF; margin: 0; font-weight: 700;">Password Changed!</h1>
  </header>
  <main style="background: #FFFFFF; padding: 30px 35px; border-radius: 0 0 10px 10px; box-shadow: 0 7px 14px rgba(155, 89, 182, 0.2);">
    <p>Hi there,</p>
    <p>Your password has been updated successfully.</p>
    <div style="text-align: center; margin: 35px 0;">
      <div style="background: #a029eb; color: #fff; width: 55px; height: 55px; line-height: 55px; border-radius: 50%; font-size: 34px;">✓</div>
    </div>
    <p>If you didn't make this change, please contact support immediately.</p>
    <ul>
      <li>Use a unique and secure password</li>
      <li>Enable two-factor authentication</li>
      <li>Do not reuse passwords across sites</li>
    </ul>
    <p>Thanks for keeping your account safe!</p>
    <p>Warm regards,<br />Your Support Team</p>
  </main>
  <footer style="text-align: center; margin-top: 25px; font-size: 0.75em; color: #AAA;">
    <p>Please do not reply to this automated email.</p>
  </footer>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Password Reset Request</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #2B2B2B; max-width: 620px; margin: 0 auto; padding: 25px; background: #F8F0FB;">
  <header style="background: linear-gradient(to right, #a29bfe, #6c5ce7); padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: #F9F6FF; margin: 0; font-weight: 700;">Reset Your Password</h1>
  </header>
  <main style="background: #FFFFFF; padding: 30px 35px; border-radius: 0 0 10px 10px; box-shadow: 0 7px 14px rgba(108, 92, 231, 0.2);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If this wasn't you, simply ignore this message.</p>
    <p>Click the button below to reset your password:</p>
    <div style="text-align: center; margin: 40px 0;">
      <a href="{resetURL}" style="background: #6c5ce7; color: #ffffff; padding: 14px 26px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px;">
        Reset Password
      </a>
    </div>
    <p><em>This link will expire in 1 hour.</em></p>
    <p>Best,<br />Your Security Team</p>
  </main>
  <footer style="text-align: center; margin-top: 25px; font-size: 0.75em; color: #999;">This is an automated message. Do not reply.</footer>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Welcome Aboard!</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2C2C2C; max-width: 640px; margin: 0 auto; padding: 30px; background: #FAF5FF;">
  <header style="background: linear-gradient(to right, #9b59b6, #8e44ad); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #FBEFFF; margin: 0; font-weight: bold;">Welcome to the Community!</h1>
  </header>
  <main style="background: #FFFFFF; padding: 35px 40px; border-radius: 0 0 12px 12px; box-shadow: 0 8px 16px rgba(155, 89, 182, 0.15);">
    <p>Hello {name},</p>
    <p>We’re thrilled to have you! You’ve successfully joined our platform. Here's to a vibrant journey together.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="#" style="background: #a029eb; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Get Started</a>
    </div>
    <p>If you have any questions, feel free to reach out. We’re here to help!</p>
    <p>Warmly,<br />The Awesome Team</p>
  </main>
  <footer style="text-align: center; margin-top: 25px; font-size: 0.8em; color: #888;">
    This is an automated message. Please do not reply.
  </footer>
</body>
</html>
`;
