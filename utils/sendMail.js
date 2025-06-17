import nodemailer from "nodemailer";

const sendOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    });
}

export default sendOTP;