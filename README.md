# 🛒 Full Stack E-Commerce App

A responsive, modern e-commerce web application built with the **MERN** stack, styled using **Tailwind CSS**, and optimized with **TypeScript** and **Redux Toolkit** for a high-performance user experience.

🌐 **Live Demo** → [medastore.vercel.app](https://medastore.vercel.app)

---

## ✨ Features

### 💻 Frontend

- ⚛️ Built with **React + TypeScript**
- 🎨 Styled using **Tailwind CSS**
- 🚀 Progressive data fetching & lazy loading
- 🔍 SEO-ready using `react-helmet`
- 📱 Fully responsive (Mobile-First)
- ⚙️ Optimized performance with `useMemo`, `React.memo`, and selective re-rendering
- 🔧 State management via **Redux Toolkit**

### 🛠 Backend

- 🌐 RESTful API built with **Express.js**
- 🗄️ **MongoDB** with **Mongoose**
- 🔐 JWT Authentication & Role-based Access
- ✅ Input validation & centralized error handling
- 📦 CRUD operations: Products, Orders, Blogs
- 🔍 Clean architecture: routes, controllers, middlewares, services

---

## 🧱 Tech Stack

| Layer     | Technologies                                                |
|-----------|-------------------------------------------------------------|
| Frontend  | React, TypeScript, Tailwind CSS, Redux Toolkit, React Router |
| Backend   | Node.js, Express.js, MongoDB, Mongoose                      |
| Auth      | JWT, bcrypt                                                 |
| Dev Tools | Vite, dotenv, nodemon, concurrently                        |
| Deployment| Vercel (frontend), Render / Railway (backend)              |
| Extras    | Axios, React Helmet, React Icons, Toast notifications      |

---

## 📁 Folder Structure

```bash
FS_Ecommerce/
├── client/         # React Frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── types/
│   └── feedback/
│
├── server/         # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
```

---

## ⚙️ Getting Started

> Prerequisites: Node.js, npm, MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/AmrFadel10/FS_Ecommerce.git
cd FS_Ecommerce
```

### 2. Start the client

```bash
cd client
npm install
npm run dev
```

### 3. Start the server (in another terminal)

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in `/server` with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

(Optional) Create `.env` in `/client` for API base URL:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 👨‍💻 Author

**Amr Fadel**  
🌐 [Portfolio](https://amr-fadel.vercel.app/)  
💼 [LinkedIn](https://www.linkedin.com/in/amrfadel/)  
💻 [GitHub](https://github.com/AmrFadel10)

---

## 📄 License

This project is licensed under the **MIT License**.
