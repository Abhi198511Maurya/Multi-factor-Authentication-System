import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import generateOTP from "../utils/otpGenerator.js";
import sendOTP from "../utils/sendMail.js"

export const register = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "invalid cridential!" });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.json({ error: "user alredy registered!" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        user.save();

        res.json({ message: "User registered!" });

    } catch (error) {
        res.json({ error: error.message });
    }
}

export const login = async (req, res) => {
    let { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'Invalid email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Wrong password' });
        }

        const otp = generateOTP();

        user.otp = otp;
        user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await user.save();

        await sendOTP(email, otp);
        res.json({ message: "OTP send to your mail!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.otp !== otp || user.otpExpiresAt < Date.now()) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        res.json({ token });
    } catch (error) {
        res.json({ error: error.message });
    }
}