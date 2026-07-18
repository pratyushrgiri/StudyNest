import express from "express"
import  { 
            getDashboard,
            getIndex,
            getHomework,
            getNotes,
            getTimeTable,
            getAssignments
        } from "../Controller/pageController.js";
const pageRouter = express.Router()

pageRouter.get('/',getIndex);
pageRouter.get('/dashboard',getDashboard);
pageRouter.get('/homework',getHomework);
pageRouter.get('/notes',getNotes);
pageRouter.get('/timetable',getTimeTable);
pageRouter.get('/assignments',getAssignments);

export default pageRouter;

