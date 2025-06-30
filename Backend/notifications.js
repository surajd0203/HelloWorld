import express from "express";
import admin from "./firebase.js";
import Token from "./TokenModal.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { token } = req.body;

  console.log("Token in backend :", token);

  try {
    await Token.updateOne({ token }, { $set: token }, { upsert: true });
    res.status(200).json({ message: "Token saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/listAll", async (req, res) => {
  const tokens = await Token.find({});
  res.json(tokens);
});

router.post("/send", async (req, res) => {
  const { tokens, title, body } = req.body;

  const message = {
    notification: { title, body },
    tokens: tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
