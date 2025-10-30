# 🧑‍🎓 Student Record API  
**Minor Project 1 — Express + MongoDB**

---

## 📘 Project Description
This project is a simple RESTful API built using **Express.js** and **MongoDB (via Mongoose)**.  
It allows basic CRUD (Create, Read, Update, Delete) operations to manage student data,  
including fields like **name**, **course**, **age**, and **city**.  

It’s designed as a **minor backend project** to practice Express + MongoDB integration, route handling, and validation.

---

## 🎯 Goal
Create a clean, modular API to manage student records using Express and MongoDB,  
and test all endpoints in **Postman**.

---

## ⚙️ Tech Stack
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (using Mongoose ORM)  
- **Environment Variables:** dotenv  
- **Testing Tool:** Postman  

---

## 🧩 Features
- Fetch all students  
- Add a new student  
- Update student details  
- Delete a student  
- Basic input validation (name and course are required)

---

## 📂 Folder Structure
student-api/
│
├── server.js # Main entry point
├── .env # MongoDB URI & Port
├── package.json
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/student-api.git
cd student-api

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
MONGO_URI=mongodb://localhost:27017/studentdb
PORT=5000

4️⃣ Run the server
node server.js


or (if using nodemon for hot reload)

npx nodemon server.js

5️⃣ Verify connection

You should see:

✅ Connected to MongoDB
🚀 Server running on http://localhost:5000

🧪 API Endpoints
Method	Endpoint	Description	Body (JSON) Example
GET	/students	Fetch all students	-
POST	/students	Add a new student	{ "name": "Prakhar", "course": "B.Tech", "age": 21, "city": "Raipur" }
PUT	/students/:id	Update student details	{ "city": "Bhilai" }
DELETE	/students/:id	Delete a student	-
✅ Validation Rules

name → required

course → required

If either is missing, the API returns:

{ "message": "Name and Course are required" }

🧰 Testing with Postman

Open Postman

Set Base URL: http://localhost:5000

Test endpoints with different methods (GET, POST, PUT, DELETE)

Check database changes in MongoDB Compass or Atlas

📜 License

This project is for educational purposes only as part of a Minor Project in backend development.

Author: Aayush  singh
College: RCET, Chhattisgarh
Year: 3rd Year — Minor Project 1


---
