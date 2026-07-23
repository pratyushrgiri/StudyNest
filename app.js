import express from "express";
import dotenv from "dotenv";
import pageRouter from "./routes/pageRoutes.js";
import authRouter from "./routes/login&registrationRoutes.js";
import connectDB from "./config/dbConfig.js";

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 8000;

app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", pageRouter);
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Server Started! http://localhost:${PORT}`);
});
