# VUC – Vavuniya University Connect

VUC is a centralized web platform designed to unify academic and non-academic
communication at the University of Vavuniya.

The system connects students, moderators, and administrators through a secure,
role-based notice and alert platform.

---

## 🔧 Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

---

## 🔐 User Roles

- **Admin**
  - Approve / reject notices
  - Manage moderators
  - Full system control

- **Moderator**
  - Create notices for assigned categories
  - Submit notices for admin approval

- **Student / User**
  - View published notices
  - Receive important alerts

---

## 🔄 Notice Workflow

Moderator → Create Notice → Pending
Admin → Approve Notice → Published
User → View Published Notices


---

## 📂 Notice Categories

- General Notices
- Academic Notices
- Welfare Notices
- Sports
- Societies & Clubs
- Student Services
  - Marketplace
  - Hostel & Accommodation
  - Lost & Found
  - Donations

---

## ⚙️ Environment Setup

### Backend
```bash
cd server
npm install
npm run dev

Create .env:

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret

Frontend
cd client
npm install
npm run dev


Create .env:

VITE_API_URL=http://localhost:5000/api

🌐 API Base URL
http://localhost:5000/api

📌 Project Status

Backend API locked ✔
Frontend integration in progress 🚧

## 👥 Project Team

This project was developed as a group effort.

- **Backend Team**: Shalini Wanasinghe and Tharusha 
- **Frontend Team**: Jathushika and Maheesha
- **Database Team**: Nixon and Malindu

All members contributed to the successful completion of the system.
