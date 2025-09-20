import express from "express";
import cors from "cors";
import admin from "./firebaseAdmin.js";

const app = express();
app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("🚀 CloudTasker Backend is running!");
});

// Verify Firebase auth token
app.post("/verify", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    res.json({ uid: decoded.uid, email: decoded.email });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});