# VUC – Vavuniya University Connect

A centralized web platform to unify academic and non-academic communication at the University of Vavuniya.

## Tech Stack
- MongoDB Atlas
- Express.js
- React.js
- Node.js

## Features
- Role-based authentication (Admin, Moderator, Student)
- Notice approval workflow
- Academic, welfare, sports & student services notices
- Secure MongoDB Atlas backend

## WorkFlow
moderator → creates notice → status: "pending"
admin → approves → status: "published"
user → sees only "published"
