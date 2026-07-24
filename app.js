import express from "express";
import expressSession from "express-session";
import dotenv from "dotenv";
import pageRouter from "./routes/pageRoutes.js";
import authRouter from "./routes/login&registrationRoutes.js";
import connectDB from "./config/dbConfig.js";

dotenv.config();

const app = express();

// Session configuration
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    next();
});

connectDB();

const PORT = process.env.PORT || 8000;

app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// page routes
app.use('/', pageRouter);
//login and registration routes
app.use('/', authRouter);
app.listen(8000, () => console.log(`Server Started! http://localhost:${PORT}`));