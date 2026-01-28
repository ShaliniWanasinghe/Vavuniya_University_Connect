
# VUC – Vavuniya University Connect

**VUC** is a centralized web platform that unify academic details, events, notices, clubs/societies, student services, and communications 
under one system.The platform consolidates notices, events, societies/clubs, and student services into a single, secure, and role-based system.

---

## 🛠 Tech Stack (MERN)

* **Frontend:** React.js
* **Backend:** Node.js with Express.js
* **Database:** MongoDB Atlas
* **Authentication:** JSON Web Tokens (JWT)
* **Version Control:** Git & GitHub

---

## 🔑 User Roles & Permissions

| Role             | Capabilities                                                                            |
| ---------------- | --------------------------------------------------------------------------------------- |
| **Admin**        | Approve, delete, and manage all notices; create moderators; full access to all sections |
| **Moderator**    | Submit notices for their respective sections (pending admin approval)                   |
| **Student/User** | View published notices only; receive alerts for important notices                       |

---

## 📝 Features

* Role-based authentication for secure access
* Notice approval workflow (moderator → admin → published)
* Categorized notices: General, Academic, Welfare, Sports, Societies/Clubs, Student Services
* Student Services sub-categories: Marketplace, Hostel/Accommodation, Lost & Found, Donations
* Important notices highlighted with alerts (priority-based)
* Trending topics highlighted in General notices
* Secure backend using MongoDB Atlas
* Mobile-friendly and responsive UI (planned)

---

## 🔄 Workflow

```
Moderator → creates notice → status: "pending"
Admin → approves notice → status: "published"
Student/User → sees only "published" notices
```

---

## 🚀 API Documentation

**Base URL:**

```
http://localhost:5000/api
```

### 1. Authentication

#### Register User

**POST** `/auth/register`
**Body:**

```json
{
  "name": "Student Name",
  "email": "student@vuc.lk",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN",
  "role": "user"
}
```

#### Login

**POST** `/auth/login`
**Body:**

```json
{
  "email": "student@vuc.lk",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN",
  "role": "user"
}
```

---

### 2. Notices

#### Create Notice (Moderator)

**POST** `/notices`
**Headers:**

```
Authorization: Bearer <token>
```

**Body:**

```json
{
  "title": "Hostel Allocation",
  "description": "Hostel list released",
  "category": "Welfare",
  "priority": "important",
  "dueDate": "2026-03-20"
}
```

**Status:** `"pending"`

---

#### Approve Notice (Admin)

**PUT** `/admin/approve-notice/:id`
**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "message": "Notice approved"
}
```

---

#### Get Published Notices (Student/User)

**GET** `/notices`
**Response:**

```json
[
  {
    "title": "Semester Exams",
    "category": "Academic",
    "priority": "important"
  }
]
```

* Only notices with `status = "published"` are returned.

---

### 3. Admin Operations

#### Create Moderator

**POST** `/admin/create-moderator`
**Body:**

```json
{
  "name": "Moderator Name",
  "email": "mod@vuc.lk",
  "password": "password123"
}
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/ShaliniWanasinghe/Vavuniya_University_Connect.git
cd Vavuniya_University_Connect/server
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file in `/server` with:

```env
PORT=5000
MONGO_URI=<Your MongoDB Atlas connection string>
JWT_SECRET=<YourSecretKey>
```

4. Start backend server:

```bash
npm run dev
```

5. Backend API is  available at:

```
http://localhost:5000/api
```

---

## 📌 Notes

* All sensitive data (passwords, JWT secrets) must remain in `.env`.
* Collections `users` and `notices` are automatically created via Mongoose schemas.
* Role-based access ensures security for each type of user.

---

![WhatsApp Image 2026-01-28 at 12 31 27](https://github.com/user-attachments/assets/9eda7f87-e3f6-4455-ba0b-aa3339fa5a0a)




![WhatsApp Image 2026-01-28 at 12 31 28](https://github.com/user-attachments/assets/592deda9-ae3d-474a-846e-7d220e362404)



![WhatsApp Image 2026-01-28 at 12 31 33](https://github.com/user-attachments/assets/bebcf29a-e9e8-4ae0-8937-accb5cc20e4f)


![WhatsApp Image 2026-01-28 at 12 31 34](https://github.com/user-attachments/assets/135c5c4c-486a-498f-a496-91f4175739a7)



![WhatsApp Image 2026-01-28 at 12 31 35](https://github.com/user-attachments/assets/3998d5ef-4c22-4f6e-8d55-7aada3f95fd8)


![WhatsApp Image 2026-01-28 at 12 31 25](https://github.com/user-attachments/assets/120bdb3c-c6ce-4383-a3a5-d505f3ccae02)



![WhatsApp Image 2026-01-28 at 12 31 28](https://github.com/user-attachments/assets/68c5f7e8-1c43-46c7-9fb0-8f2e839baf39)

![WhatsApp Image 2026-01-28 at 12 31 29](https://github.com/user-attachments/assets/07dabcb4-2980-4e1f-a9e0-e92940e1ca3e)



![WhatsApp Image 2026-01-28 at 12 31 30](https://github.com/user-attachments/assets/8a4141e3-b6c8-46d4-a33a-5aadcc2d446e)



![WhatsApp Image 2026-01-28 at 12 31 32](https://github.com/user-attachments/assets/e1fc5b25-0328-410a-97cb-981e7adceaf1)


![WhatsApp Image 2026-01-28 at 12 31 36](https://github.com/user-attachments/assets/63486f65-e10f-49dc-b7ac-00187326a146)

