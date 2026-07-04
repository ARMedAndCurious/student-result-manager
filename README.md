# 🎓 Student Result Management System

A full-stack web application for managing students, their subjects, and academic results.

## ✨ Features

- Add Students
- Delete Students
- Add Subjects to Students
- View Student Subjects
- Calculate Percentage Automatically
- PASS / FAIL Status
- Modern Responsive UI
- Navigation using React Router
- RESTful API Integration

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- CSS3

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate

### Database
- PostgreSQL

---

## 📂 Project Structure

```
Frontend
├── Components
├── Pages
├── Services
└── App.jsx

Backend
├── Controller
├── Service
├── Repository
├── Entity
└── Exception Handling
```

---



## 🚀 Getting Started

### Backend

```bash
cd StudentResultManager
```

Configure PostgreSQL in `application.yml`.

Run:

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### Frontend

```bash
cd student-result-frontend
```

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Students

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Add student |
| DELETE | `/api/students/{id}` | Delete student |

### Subjects

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/students/{studentId}/subjects` | Add subject |
| GET | `/api/students/{studentId}/subjects` | Get all subjects |

### Results

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students/{studentId}/subjects/result` | Get student result |

---

## 📚 Concepts Practiced

- React Functional Components
- Props
- useState
- useEffect
- React Router
- Conditional Rendering
- Component Communication
- CRUD Operations
- REST APIs
- Axios
- Spring Boot
- JPA & Hibernate
- PostgreSQL Integration

---

## 👩‍💻 Author

**Akshara Jain**

GitHub: https://github.com/ARMedAndCurious
