const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const http = require('http'); // New Import
const { Server } = require("socket.io"); // New Import
require('dotenv').config();

const app = express();
const server = http.createServer(app); // Wrap Express
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Setup Socket.io with CORS
// UPDATE THIS PART IN server.js
const io = new Server(server, {
  cors: {
    origin: "*", // Allow connections from anywhere (Vercel)
    methods: ["GET", "POST"]
  }
});

app.use(cors({
    origin: "*" // Allow React to make requests
}));
// --- Real-Time Logic ---
let activeUsers = 0;

io.on('connection', (socket) => {
  activeUsers++;
  // Tell everyone the new count
  io.emit('userCount', activeUsers);
  console.log(`User connected. Active: ${activeUsers}`);

  socket.on('disconnect', () => {
    activeUsers--;
    // Tell everyone the new count
    io.emit('userCount', activeUsers);
    console.log(`User disconnected. Active: ${activeUsers}`);
  });
});
// -----------------------

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Explicit host
  port: 587,              // Standard port for cloud apps
  secure: false,          // False for 587, True for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Real-time Notification to Admin (Optional feature for later)
  // io.emit('new_message', { name }); 

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Message from ${name}`,
    text: `From: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// CHANGE: app.listen -> server.listen
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});