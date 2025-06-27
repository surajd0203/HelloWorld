import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://surajdudhatra:Infilon@cluster0.6agcdut.mongodb.net/list-app-fcm-token", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connect"))
  .catch((e) => console.error("DB connection error : ", e));
