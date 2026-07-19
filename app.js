import express from "express"
import dotenv from 'dotenv'
import pageRouter from "./routes/pageRoutes.js"
dotenv.config();
const app= express();

const PORT= process.env.PORT || 8000;

app.use(express.static("public/css"));
app.set("view engine",'ejs');
app.get('/',pageRouter);
app.get('/dashboard',pageRouter);
app.get('/assignments',pageRouter);
app.get('/timetable',pageRouter);
app.get('/homework',pageRouter);
app.get('/notes',pageRouter);
app.get('/index',pageRouter);
app.listen(8000,()=>console.log(`Server Started! http://localhost:${PORT}`));