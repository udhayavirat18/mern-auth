// email.js
import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE
} from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await mailtrapClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: 'Email Confirmation',
      html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
    });
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await mailtrapClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: 'Welcome to our platform',
      html: WELCOME_EMAIL_TEMPLATE.replace('{name}', name),
    });
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await mailtrapClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: 'Password Reset',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
    });
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await mailtrapClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: 'Password Reset Success',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};
