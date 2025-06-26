import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/list-app-notificaiton", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connect"))
  .catch((e) => console.error("DB connection error : ", e));
