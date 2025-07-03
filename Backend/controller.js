import admin from "./firebase.js";
import { Token, User } from "./TokenModal.js";

export const registerController = async (req, res) => {
  const { token } = req.body;

  //   console.log("Token in backend :", token);

  try {
    await Token.updateOne({ token }, { token }, { upsert: true });
    res.status(200).json({ message: "Token saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listController = async (req, res) => {
  const tokens = await Token.find({});
  res.json(tokens);
};

export const sendController = async (req, res) => {
  const { tokens, title, body, image } = req.body;

  const message = {
    notification: { title, body, image },
    tokens: tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const userDetailController = async (req, res) => {
  console.log("REQ.BODY: ", req.body);

  const { id, userId, title, body } = req.body;

  try {
    const user = await User.insertMany({ id, userId, title, body });
    res.status(200).json({ message: "user created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userListController = async (req, res) => {
  const users = await User.find({}).sort({ id: 1, userId: 1 });
  res.json(users);
};

export const idMsgController = async (req, res) => {
  const { tokens, id, title, body, image } = req.body;

  const message = {
    notification: {
      title: `ID : ${id} - ${title} `,
      body,
      image,
    },
    data: {
      id: id.toString(),
    },
    tokens: tokens,
  };

  console.log(message);

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
