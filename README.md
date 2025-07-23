# Vutto - Frontend

This is the frontend of **Vutto**, a second-hand bike marketplace built using **React.js** and **Bootstrap 5**. It allows users to register, log in, view all bikes, filter by brand/model, add new listings, edit/delete their own bikes, and view details of each listing.

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 📋 Browse all bike listings
- 🔍 Filter bikes by brand and model
- ➕ Add bike listing (with image URL)
- ✏️ Edit/Delete your own listings
- 🖼️ Responsive UI with a bike image gallery on the homepage
- 📱 Mobile-friendly layout

---

## 🛠️ Setup Instructions

**Navigate to the frontend folder**:
cd frontend

**Install dependencies**:
npm install

**Start the frontend server**:
npm start

This will run the React app on http://localhost:3000

**Folder Structure**

frontend/
├── public/
├── src/
│   ├── assets/               # Static assets like images
│   ├── components/           # Reusable components (e.g., Sidebar, BikeGallery)
│   ├── pages/                # Main route components (Login, Register, Listings, etc.)
│   ├── layout/               # Layout wrapper with sidebar
│   ├── api/axios.js          # Axios instance with baseURL
│   ├── styles/               # Custom CSS
│   └── App.js / index.js     # Entry files
└── package.json

**Dependencies Used**

react

react-router-dom

axios

bootstrap

**API Integration**

The frontend communicates with the backend through REST API calls defined in axios.js. Make sure the backend is running at the correct base URL (http://localhost:5000 or your deployment URL).

**Sample User Flow**

Visit /register to create a new account.
or
Log in with your credentials.

Browse or filter all bikes from the homepage.

Add/edit/delete bikes from "My Listings".

Click a bike card to view its full details.


