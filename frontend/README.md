# 🛒 Otaku Streetwear – Redux Toolkit Project

A modern **React e-commerce application** built to practice and demonstrate **Redux Toolkit**, API integration, and state management concepts using a **JSON Server backend** and **Fake Store API**.

🔗 **Live Demo:**  
👉 https://otakustreetwear.vercel.app

📦 **GitHub Repository:**  
👉 https://github.com/Abi-390/ReduxProject

---

## 🚀 Features

- 🧠 Global state management using **Redux Toolkit**
- 🛍️ Product listing fetched from **Fake Store API**
- 🛒 Cart functionality (add / remove / update items)
- 📦 Backend simulation using **JSON Server**
- 🔄 Centralized API handling
- ⚡ Fast and responsive UI
- 🌐 Deployed on **Vercel** 

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Redux
- React Router DOM
- Axios

### Backend (Mock)
- JSON Server
- Fake Store API

### Deployment
- Vercel
- Render
---

## 📁 Project Structure
```txt
ReduxProject/
├── Backend/                # JSON Server backend
│   ├── db.json             # Mock database
│   └── ...other backend files
│
├── frontend/               # React + Redux frontend
│   ├── public/
│   ├── src/
│   │   ├── api/            # API functions/hooks
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Page-level components
│   │   ├── redux/          # Redux Toolkit slices & store
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   ├── App.jsx         # App component
│   │   └── main.jsx        # App entry
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md