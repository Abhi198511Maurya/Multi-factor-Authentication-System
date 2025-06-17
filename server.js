import express from "express";
import connectDB from "./config/db.js";
import 'dotenv/config'
import authRoutes from './routes/authRoutes.js'

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening at ${port}`);
});