
# 🌿 Full-Stack Web Application – Laravel + React + SCSS

This project is a modern full-stack web application built using **Laravel** for the backend and **React** with **SCSS** for the frontend.  
It delivers a responsive, dynamic, and user-friendly experience with strong backend logic, clean UI design, and efficient API communication between client and server.

---

## 🧩 Tech Stack

**Frontend:** React, SCSS  
**Backend:** Laravel  
**Database:** MySQL  
**Other Tools:** Node.js, npm, Composer

---

## ⚙️ Installation & Setup

### 🖥️ Backend (Laravel)

1. **Clone the repository**
   git clone https://github.com/DeepikaRajapaksha/your-repo-name.git
   cd your-repo-name/backend

2. **Install dependencies**

   composer install

3. **Create environment file**

   cp .env.example .env

4. **Generate the application key**

   php artisan key:generate

5. **Set up database configuration**
   Open the `.env` file and update your database credentials:

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=root
   DB_PASSWORD=

6. **Run database migrations**

   php artisan migrate

7. **Start the Laravel development server**

   php artisan serve

   The backend will run on `http://127.0.0.1:8000`


### 🌐 Frontend (React)

1. **Navigate to the frontend directory**

   cd ../frontend


2. **Install dependencies**

   npm install

3. **Create `.env` file in the frontend folder**
   Add the backend API URL:

   REACT_APP_API_URL=http://127.0.0.1:8000/api

4. **Start the React development server**

   npm start

   The frontend will run on `http://localhost:3000`
