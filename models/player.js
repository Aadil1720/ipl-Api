// 
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    country: { type: String, required: true },
    runs: { type: Number, required: true },
    image: { type: String, required: true },
    role: { type: String, enum: ['Batsman', 'Bowler', 'All-rounder'], required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });

// Indexes for performance
playerSchema.index({ team: 1 }); // For team filtering
playerSchema.index({ name: 'text' }); // For text search
playerSchema.index({ runs: -1 }); // For sorting by runs
playerSchema.index({ salary: -1 }); // For sorting by salary

module.exports = mongoose.model('Player', playerSchema);


