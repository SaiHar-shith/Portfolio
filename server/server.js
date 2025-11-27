const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// ... (Keep your express/socket setup here) ... 

// --- DEBUGGING BLOCK (Add this before transporter) ---
console.log("------------------------------------------------");
console.log("🚀 STARTUP CONFIGURATION CHECK");
console.log("1. HOST TARGET: smtp.gmail.com"); 
console.log("2. PORT TARGET: 465");
console.log("3. EMAIL USER: ", process.env.EMAIL_USER);
console.log("4. PASS LENGTH:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : "MISSING");
console.log("------------------------------------------------");
// -----------------------------------------------------

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify Connection
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