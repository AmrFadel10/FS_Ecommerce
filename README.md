# 🛍️ Full Stack E-Commerce Application

A modern, full-stack e-commerce platform built with **React**, **TypeScript**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB** — designed for high performance, scalability, and great user experience.

## 🚀 Features

### 🖥️ Frontend

- Built with **React + TypeScript**
- Styled using **Tailwind CSS**
- **Progressive data fetching** on scroll (e.g. Popular Products, Blogs)
- **Skeleton loaders**, **lazy loading**, and **loading indicators**
- Optimized rendering with `useMemo`, `React.memo`, and Redux selectors
- **Responsive design**, mobile-first
- SEO-ready with `react-helmet` and meta tags

### 🔙 Backend

- Developed with **Node.js + Express**
- **MongoDB** database with **Mongoose**
- RESTful API with:
  - 🔐 Auth & Authorization (JWT)
  - ✅ Input validation & error handling
  - 🛒 CRUD: Products, Blogs, Orders
- Clean architecture: routes, controllers, models, middlewares

### 🔄 Full Stack Integration

- Secure client-server communication using `Axios`
- Unified error handling and loading indicators
- Responsive user feedback and toast messages
- Role-based access (e.g. admin, user)

## 🧠 Tech Stack

| Layer      | Stack                                                        |
| ---------- | ------------------------------------------------------------ |
| Frontend   | React, TypeScript, Redux Toolkit, Tailwind CSS, React Router |
| Backend    | Node.js, Express.js, MongoDB, Mongoose                       |
| Auth       | JWT, bcrypt                                                  |
| Deployment | Vercel (frontend), Render/Heroku (backend)                   |
| Utilities  | Axios, dotenv, React Icons, Helmet, etc.                     |

---

## 📁 Folder Structure

├── client/ # React Frontend
│ ├── pages/
│ ├── components/
│ ├── redux/
│ ├── types/
│ └── feedback/
│
├── server/ # Express Backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ └── config/

🌐 Live Demo[medastore.vercel.app](https://medastore.vercel.app)

---

## 🧰 Getting Started

# Clone the repository

git clone https://github.com/AmrFadel10/FS_Ecommerce.git
cd FS_Ecommerce

# Start client

cd client
npm install
npm run dev

# Start server (in another terminal)

cd ../server
npm install
npm run dev

---

## 🧑‍💻 Author

Made with ❤️ by Amr Fadel

Portfolio: [[Link](https://amr-fadel.vercel.app/)]

LinkedIn: [[Link](https://www.linkedin.com/in/amrfadel/)]

GitHub: github.com/AmrFadel10
