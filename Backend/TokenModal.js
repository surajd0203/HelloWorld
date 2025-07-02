import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  instanceId: {
    type: String,
    required: true,
    index: true,
  },
});

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
    required: true,
  },

  userId: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});

const Token = mongoose.model("Token", tokenSchema);
const User = mongoose.model("User", userSchema);

export { Token, User };
