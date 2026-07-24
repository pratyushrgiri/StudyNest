import express from "express"
import  { 
            getDashboard,
            getIndex,
            getHomework,
            getNotes,
            getTimeTable,
            getAssignments
        } from "../Controller/pageController.js";

//sesson check
import { requireLogin,checkSession } from "../middleware/sesson.js";
const pageRouter = express.Router()

pageRouter.get('/'||'/index',checkSession, getIndex);
pageRouter.get('/dashboard',requireLogin, getDashboard);
pageRouter.get('/homework',requireLogin, getHomework);
pageRouter.get('/notes',requireLogin, getNotes);
pageRouter.get('/timetable',requireLogin, getTimeTable);
pageRouter.get('/assignments',requireLogin, getAssignments);
pageRouter.get('/index',checkSession, getIndex);
export default pageRouter;

