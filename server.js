require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const playerRoutes = require('./routes/playerRoutes');
const errorHandler = require('./middleware/error');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/players', playerRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
