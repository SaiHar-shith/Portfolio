const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const PORT = 5000;

app.use(express.json());
app.use(cors({
    origin: "*" // Allow all origins for simplicity
}));

// Setup Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// --- Real-Time User Counter Logic ---
let activeUsers = 0;

io.on('connection', (socket) => {
  activeUsers++;
  io.emit('userCount', activeUsers);
  console.log(`User connected. Active: ${activeUsers}`);

  socket.on('disconnect', () => {
    activeUsers--;
    io.emit('userCount', activeUsers);
    console.log(`User disconnected. Active: ${activeUsers}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});