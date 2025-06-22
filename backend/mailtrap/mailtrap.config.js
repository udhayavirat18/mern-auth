// mailtrap.config.js (Now Resend version)
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

export const mailtrapClient = new Resend(process.env.RESEND_API_KEY); // reuse existing name

export const sender = {
  email: "noreply@udhayakumar.xyz",
  name: "Udhaya",
};
