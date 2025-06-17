# 🔐 Multi-Factor Authentication Backend with Node.js, Express & MongoDB

A secure backend API for **Multi-Factor Authentication (MFA)** using **Node.js**, **Express.js**, **MongoDB**, and **Nodemailer**. This project supports password-based login followed by **OTP verification via email**, adding an extra layer of security.

---

## 🚀 Features

- ✅ User Registration & Secure Password Hashing
- ✅ Email + Password Based Login
- ✅ Email-Based OTP Verification (MFA)
- ✅ JWT Token Generation for Authenticated Sessions
- ✅ Environment Configurations with `.env`
- ✅ Modular Code Structure for Scalability

---

## 📁 Project Structure

mfa-auth-backend/
│
├── config/ # Database connection
├── controllers/ # Auth logic
├── models/ # Mongoose models
├── routes/ # API routes
├── utils/ # OTP generator, email sender
├── .env # Environment variables
├── app.js # Entry point
└── README.md # You are here!


---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)**
- **Bcrypt.js** for password hashing
- **Nodemailer** for sending OTP via email

---

## 🌐 API Endpoints

| Method | Endpoint            | Description                    |
|--------|---------------------|--------------------------------|
| POST   | `/api/auth/register`  | Register user with email/password |
| POST   | `/api/auth/login`     | Login and send OTP to email    |
| POST   | `/api/auth/verify-otp`| Verify OTP and issue JWT token |

---

## 📬 How OTP MFA Works

1. **User Logs In** with email and password.
2. **OTP is Sent** to their email address.
3. **User Enters OTP** to complete authentication.
4. **JWT Token** is returned for authenticated requests.

---

## 🛠️ Installation
    ```bash
    git clone https://github.com/your-username/mfa-auth-backend.git
    cd mfa-auth-backend
    npm install


**📄 Environment Variables (.env)**

    ```bash
      PORT=5000
      MONGO_URI=your_mongo_db_uri
      JWT_SECRET=your_jwt_secret
      EMAIL_USER=your_email@gmail.com
      EMAIL_PASS=your_email_password

🧪 Testing with Postman
1. Register with /api/auth/register
2. Login to trigger OTP with /api/auth/login
3. Verify OTP with /api/auth/verify-otp

**⭐ Star this repository**
If you found this useful, please ⭐ the repo and share it. It helps more developers find it and keeps the project active!

