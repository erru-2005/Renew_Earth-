// filepath: /E:/plantdonner/backend/app.js
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
app.use(cors({
       origin: 'https://plantdonation.onrender.com/Signin',
       credentials: true
}));
app.use(express.json());

const _dirname = path.resolve()
const userRoutes = require('./routes/userRoutes'); // Import userRoutes from the routes folder
app.use('/', userRoutes); // Use the userRouter for user-related routes

app.use(express.static(path.join(_dirname, '/frontend/dist'))); // Serve the frontend files
 app.get('*', (_, res) => {   // Handle all other routes
        res.sendFile(path.join(_dirname, '/frontend/dist/index.html'));
 });

module.exports = app;