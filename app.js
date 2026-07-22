import express from "express"
import dotenv from 'dotenv'
import pageRouter from "./routes/pageRoutes.js"
import authRouter from "./routes/login&registrationRoutes.js"
import connectDB from "./config/dbConfig.js";
dotenv.config();
const app= express();
connectDB();
const PORT= process.env.PORT || 8000;

app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// page routes
app.get('/',pageRouter);
app.get('/dashboard',pageRouter);
app.get('/assignments',pageRouter);
app.get('/timetable',pageRouter);
app.get('/homework',pageRouter);
app.get('/notes',pageRouter);
app.get('/index',pageRouter);

//login and registration routes
app.post('/register', authRouter);
app.listen(8000,()=>console.log(`Server Started! http://localhost:${PORT}`));