# 🏏 IPL Players Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to manage IPL players. This API supports player creation, listing, updating, deletion, filtering, sorting, pagination, image uploads, and searching by name — all with proper input validation and structured project architecture.

---


## 📁 Project Structure

├── config/ # Database configuration
├── controllers/ # Controller logic for each endpoint
├── middleware/ # Error handler, multer setup, etc.
├── models/ # Mongoose models
├── routes/ # All route definitions
├── uploads/ # Uploaded images
├── utils/ # Utilities like pagination logic
├── seed.js # Script to populate sample player data
├── server.js # Entry point of the server
├── .env # Environment variables
├── .gitignore
└── README.md


---

## 🛠️ Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Joi
- **File Uploads**: Multer
- **Environment Management**: Dotenv
- **Logging**: Morgan (optional)

---

## 🚀 Features

- ✅ Add, update, delete IPL players
- ✅ View player details
- ✅ Paginated player listing
- ✅ Filter players by team
- ✅ Search players by name
- ✅ Sort by `runs` or `salary`
- ✅ Upload player profile images
- ✅ Input validation with Joi
- ✅ Seed data with demo players (20+)
- ✅ Clean and modular code structure

## 📦 Installation


```bash
git clone https://github.com/Aadil1720/IPL-Api.git
cd IPL-Api

PORT=5000
MONGO_URI=your_mongodb_connection_string

npm install

node server.js

