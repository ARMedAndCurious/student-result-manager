# 🎓 Student Result Management System

A full-stack Student Result Management System built using **React**, **Spring Boot**, and **PostgreSQL**. The application allows users to manage students, add subjects, calculate percentages, and generate academic results.

> 🚀 **Live Frontend Demo:**  
> https://student-result-manager-flame.vercel.app/

---


# ✨ Features

- ➕ Add Students
- 🗑️ Delete Students
- 📚 Add Subjects
- 📊 Automatic Percentage Calculation
- ✅ PASS / FAIL Result
- 📋 View Student Result
- 🎨 Modern Responsive UI
- ⚡ React Router Navigation
- 🔄 REST API Integration

---

# 🛠 Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

- Spring Boot
- Spring Data JPA
- Hibernate

### Database

- PostgreSQL

---

# 📂 Project Structure

```
student-result-manager
│
├── student-result-backend
│     └── Spring Boot REST API
│
└── student-result-frontend
      └── React Application
```

---

# 📡 REST API

## Student APIs

| Method | Endpoint |
|---------|----------|
| GET | `/api/students` |
| POST | `/api/students` |
| DELETE | `/api/students/{id}` |

---

## Subject APIs

| Method | Endpoint |
|---------|----------|
| POST | `/api/students/{studentId}/subjects` |
| GET | `/api/students/{studentId}/subjects` |

---

## Result API

| Method | Endpoint |
|---------|----------|
| GET | `/api/students/{studentId}/subjects/result` |

---

# 🧠 Concepts Practiced

## React

- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- Component Communication
- React Router
- Axios
- Component-based Architecture

## Spring Boot

- REST Controllers
- Service Layer
- Repository Layer
- DTOs
- Exception Handling
- Dependency Injection
- Validation
- JPA Relationships
- Hibernate

## Database

- PostgreSQL
- One-to-Many Relationship
- Entity Mapping

---

# 🚀 Running Locally

## Backend

```bash
cd student-result-backend/StudentResultManager
mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

## Frontend

```bash
cd student-result-frontend/student-result-frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Local Development |
| Database | PostgreSQL |

> **Note:**  
> The live demo currently showcases the frontend interface. The backend is configured for local development, so features requiring the Spring Boot API (such as loading or modifying student data) will work when the backend is running locally.

---

# 📚 Future Improvements

- Spring Security + JWT Authentication
- Full-stack Cloud Deployment
- Search & Filter Students
- Edit Student Details
- Edit Subject Details
- Pagination
- Dashboard Analytics

---

# 👩‍💻 Author

**Akshara Jain**

GitHub: https://github.com/ARMedAndCurious




⭐ If you found this project interesting, feel free to star the repository!
