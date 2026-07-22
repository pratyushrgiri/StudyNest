# 📚 StudyNest

StudyNest is a modern student productivity platform built with **Node.js**, **Express**, and **MongoDB**. It provides students with a centralized place to manage notes, homework, assignments, and class schedules through a clean, minimal interface.

The project follows the **MVC (Model-View-Controller)** architecture, making it easy to maintain, extend, and scale as new features are added.

> **Status:** 🚧 Active Development

---

# ✨ Features

### 🔐 Authentication

* User registration
* Secure login system
* Client-side form validation
* Server-side validation
* MongoDB user storage

### 📖 Dashboard

* Student overview page
* Quick access to all modules
* Clean and minimal interface

### 📝 Notes

* Personal note management
* Organized note interface
* Planned Markdown support

### 📅 Timetable

* Weekly class schedule
* Organized daily timetable

### 📚 Homework

* Homework tracking
* Status management
* Due-date organization

### 📌 Assignments

* Assignment tracker
* Progress monitoring
* Deadline management

### 🎨 Modern UI

* Responsive design
* Shared design system
* Reusable CSS architecture
* Smooth animations

---

# 🛠 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Architecture

* MVC Pattern

---

# 📁 Project Structure

```text
StudyNest/
│── .env
│── .gitignore
│── app.js
│── LICENSE
│── package.json
│── package-lock.json
│── README.md
│
├── config/
│   └── dbConfig.js
│
├── Controller/
│   └── pageController.js
│
├── middleware/
│
├── Model/
│   └── users.js
│
├── routes/
│   └── pageRoutes.js
│
├── services/
│   └── userServices.js
│
├── public/
│   ├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── index.css
│   │   ├── dashboard.css
│   │   ├── notes.css
│   │   ├── homework.css
│   │   ├── assignments.css
│   │   └── timetable.css
│   └── js/
│       └── auth.js
│
└── views/
    ├── index.html
    ├── dashboard.html
    ├── notes.html
    ├── homework.html
    ├── assignments.html
    └── timetable.html
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/your-username/StudyNest.git
```

## Install dependencies

```bash
npm install
```

## Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

## Start the development server

```bash
npm start
```

or

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# 📌 Current Features

* ✅ Express server
* ✅ MongoDB connection
* ✅ MVC project structure
* ✅ User model
* ✅ Authentication pages
* ✅ Client-side validation
* ✅ Modular routing
* ✅ Service layer
* ✅ Responsive interface

---

# 🚧 Planned Features

* JWT Authentication
* Password hashing with bcrypt
* Protected routes
* Session management
* Markdown editor
* Rich note viewer
* Search functionality
* User roles (Student / Teacher / Admin)
* Teacher Notes
* File uploads
* Assignment reminders
* Homework notifications
* Profile management
* Settings page

---

# 🗺 Roadmap

### Phase 1

* Authentication
* MongoDB integration
* User management

### Phase 2

* Notes CRUD
* Homework CRUD
* Assignment CRUD
* Timetable CRUD

### Phase 3

* Markdown support
* Search
* User roles
* Teacher dashboard

### Phase 4

* Deployment
* Testing
* Performance optimization

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
