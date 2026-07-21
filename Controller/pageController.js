import fs from 'fs';
export const getIndex=(req,res)=>{

    res.sendFile('index.html', { root: './views' });
}

export const getDashboard=(req,res)=>{

    res.sendFile('dashboard.html', { root: './views' });
}
export const getAssignments=(req,res)=>{

    res.sendFile('assignments.html', { root: './views' });
}

export const getHomework=(req,res)=>{

    res.sendFile('homework.html', { root: './views' });
}

export const getNotes=(req,res)=>{

    res.sendFile('notes.html', { root: './views' });
}

export const getTimeTable=(req,res)=>{

    res.sendFile('timetable.html', { root: './views' });
}