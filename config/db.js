const mongoose = require('mongoose');
const winston = require('winston');

// Configure Winston logger for database errors
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log' }),
        new winston.transports.Console(), // Log to console for development
    ],
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 10, // Connection pooling for scalability
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000, // Timeout for socket inactivity
        });
        console.log('MongoDB connected successfully');

        // Ensure indexes are created
        mongoose.model('Player').createIndexes();
    } catch (error) {
        logger.error('MongoDB connection error', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
        });
        process.exit(1); // Exit process on connection failure
    }
};

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
    logger.error('MongoDB connection error after initial connection', {
        message: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString(),
    });
});

// Handle reconnection
mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected, attempting to reconnect...');
});

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//          await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected.");
//     } catch (error) {
//         console.log("Mongodb connection failed!",error);
//     }
// };

// module.exports = connectDB;
