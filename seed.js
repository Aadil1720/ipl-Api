require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('./models/player'); // Adjust if needed
const connectDB = require('./config/db');

const seedPlayers = async () => {
  try {
    await connectDB();
    await Player.deleteMany(); // Clean slate

    const players = [
      {
        name: 'Virat Kohli',
        team: 'RCB',
        country: 'India',
        runs: 6400,
        image: 'https://linktoimage.com/kohli.jpg',
        role: 'Batsman',
        salary: 150000000,
      },
      {
        name: 'MS Dhoni',
        team: 'CSK',
        country: 'India',
        runs: 5100,
        image: 'https://linktoimage.com/dhoni.jpg',
        role: 'Batsman',
        salary: 125000000,
      },
      {
        name: 'Rashid Khan',
        team: 'GT',
        country: 'Afghanistan',
        runs: 900,
        image: 'https://linktoimage.com/rashid.jpg',
        role: 'Bowler',
        salary: 95000000,
      },
      {
        name: 'Hardik Pandya',
        team: 'MI',
        country: 'India',
        runs: 2100,
        image: 'https://linktoimage.com/hardik.jpg',
        role: 'All-rounder',
        salary: 110000000,
      },
      {
        name: 'Ben Stokes',
        team: 'CSK',
        country: 'England',
        runs: 3550,
        image: 'https://linktoimage.com/stokes.jpg',
        role: 'All-rounder',
        salary: 108000000,
      },
      {
        name: 'Rohit Sharma',
        team: 'MI',
        country: 'India',
        runs: 5800,
        image: 'https://linktoimage.com/rohit.jpg',
        role: 'Batsman',
        salary: 145000000,
      },
      {
        name: 'David Warner',
        team: 'DC',
        country: 'Australia',
        runs: 5300,
        image: 'https://linktoimage.com/warner.jpg',
        role: 'Batsman',
        salary: 120000000,
      },
      {
        name: 'Kane Williamson',
        team: 'GT',
        country: 'New Zealand',
        runs: 4200,
        image: 'https://linktoimage.com/kane.jpg',
        role: 'Batsman',
        salary: 90000000,
      },
      {
        name: 'KL Rahul',
        team: 'LSG',
        country: 'India',
        runs: 4700,
        image: 'https://linktoimage.com/rahul.jpg',
        role: 'Batsman',
        salary: 135000000,
      },
      {
        name: 'Shubman Gill',
        team: 'GT',
        country: 'India',
        runs: 3000,
        image: 'https://linktoimage.com/gill.jpg',
        role: 'Batsman',
        salary: 95000000,
      },
      {
        name: 'Jasprit Bumrah',
        team: 'MI',
        country: 'India',
        runs: 400,
        image: 'https://linktoimage.com/bumrah.jpg',
        role: 'Bowler',
        salary: 100000000,
      },
      {
        name: 'Mohammed Shami',
        team: 'GT',
        country: 'India',
        runs: 350,
        image: 'https://linktoimage.com/shami.jpg',
        role: 'Bowler',
        salary: 80000000,
      },
      {
        name: 'Andre Russell',
        team: 'KKR',
        country: 'West Indies',
        runs: 2500,
        image: 'https://linktoimage.com/russell.jpg',
        role: 'All-rounder',
        salary: 110000000,
      },
      {
        name: 'Sunil Narine',
        team: 'KKR',
        country: 'West Indies',
        runs: 1000,
        image: 'https://linktoimage.com/narine.jpg',
        role: 'All-rounder',
        salary: 95000000,
      },
      {
        name: 'Glenn Maxwell',
        team: 'RCB',
        country: 'Australia',
        runs: 2800,
        image: 'https://linktoimage.com/maxwell.jpg',
        role: 'All-rounder',
        salary: 115000000,
      },
      {
        name: 'Faf du Plessis',
        team: 'RCB',
        country: 'South Africa',
        runs: 4200,
        image: 'https://linktoimage.com/faf.jpg',
        role: 'Batsman',
        salary: 102000000,
      },
      {
        name: 'Trent Boult',
        team: 'RR',
        country: 'New Zealand',
        runs: 200,
        image: 'https://linktoimage.com/boult.jpg',
        role: 'Bowler',
        salary: 89000000,
      },
      {
        name: 'Yuzvendra Chahal',
        team: 'RR',
        country: 'India',
        runs: 300,
        image: 'https://linktoimage.com/chahal.jpg',
        role: 'Bowler',
        salary: 84000000,
      },
      {
        name: 'Sam Curran',
        team: 'PBKS',
        country: 'England',
        runs: 1500,
        image: 'https://linktoimage.com/curran.jpg',
        role: 'All-rounder',
        salary: 112000000,
      },
      {
        name: 'Arshdeep Singh',
        team: 'PBKS',
        country: 'India',
        runs: 100,
        image: 'https://linktoimage.com/arshdeep.jpg',
        role: 'Bowler',
        salary: 75000000,
      },
    ];

    await Player.insertMany(players);
    console.log('✅ Seeded 20 players successfully.');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedPlayers();
