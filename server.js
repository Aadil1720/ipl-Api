// // require('dotenv').config();
// // const express = require('express');
// // const connectDB = require('./config/db');
// // const playerRoutes = require('./routes/playerRoutes');
// // const errorHandler = require('./middleware/error');
// // // const mongoSanitize = require('express-mongo-sanitize');
// // const path = require('path');

// // const app = express();

// // // Debug multipart requests
// // // app.use((req, res, next) => {
// // //     if (req.headers['content-type'] && req.headers['content-type'].includes('multipart/form-data')) {
// // //         console.log('Multipart Request Headers:', JSON.stringify(req.headers, null, 2));
// // //         let rawBody = '';
// // //         req.on('data', (chunk) => {
// // //             // Limit to first 1KB to avoid memory issues
// // //             if (rawBody.length < 1024) {
// // //                 rawBody += chunk.toString('utf8');
// // //             }
// // //         });
// // //         req.on('end', () => {
// // //             console.log('Multipart Raw Body (first 1KB):', rawBody);
// // //         });
// // //     }
// // //     next();
// // // });

// // app.use(express.json());
// // // app.use(mongoSanitize());
// // app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));
// // app.use('/api/players', playerRoutes);
// // app.use(errorHandler);

// // const PORT = process.env.PORT || 5000; // Changed to 5000 to match your request
// // connectDB().then(() => {
// //     app.listen(PORT, () => {
// //         console.log(`Server running on port ${PORT}`);
// //     });
// // });
// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const playerRoutes = require('./routes/playerRoutes');
// const errorHandler = require('./middleware/error');
// const path = require('path');
// // const mongoSanitize = require('express-mongo-sanitize');

// const app = express();

// // Middleware
// // app.use(mongoSanitize()); // Sanitize all requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/players', playerRoutes);

// // Error handling
// app.use(errorHandler);

// // Connect to MongoDB and start server
// const PORT = process.env.PORT || 3000;
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });

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
