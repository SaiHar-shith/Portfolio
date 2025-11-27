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
console.log("------------------------------------------------");
console.log("🚀 STARTUP CONFIGURATION CHECK");
console.log("1. HOST TARGET: smtp.gmail.com"); 
console.log("2. PORT TARGET: 465");
console.log("3. EMAIL USER: ", process.env.EMAIL_USER);
console.log("4. PASS LENGTH:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : "MISSING");
console.log("------------------------------------------------");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",  // <--- FIXED: Must be Gmail, not Resend
  port: 465,               // <--- SSL Port
  secure: true,            // <--- Must be true for 465
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // <--- FIXED: Use the PASS variable, not USER
  }
});

// Verify connection immediately
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ CONNECTION FAILED:", error);
  } else {
    console.log("✅ SERVER READY: Connected to Gmail successfully!");
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