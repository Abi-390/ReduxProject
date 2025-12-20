# 🛒 Otaku Streetwear – Redux Toolkit Project

A modern **React e-commerce application** built to demonstrate **Redux Toolkit**, state management, API integration, and a mock backend using **JSON Server deployed on Render**.

🔗 **Live Demo:**  
👉 https://otakustreetwear.vercel.app

📦 **GitHub Repository:**  
👉 https://github.com/Abi-390/ReduxProject

---

## 🚀 Features

- 🧠 Global state management with **Redux Toolkit**
- 🛍️ Fetching products from the **Fake Store API**
- 🛒 Cart functionality: add / remove / update items
- 📦 Backend mock API using **JSON Server** deployed on **Render**
- ⚡ Fast, responsive UI
- 🌐 Frontend deployed on **Vercel**

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Redux
- React Router DOM
- Axios

### Backend
- JSON Server (mock API)
- Render (Backend Deployment)

### Deployment
- Frontend: Vercel
- Backend: Render

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
