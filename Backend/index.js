import express from "express";
import notificationRoute from "./notifications.js"
import "./db.js"

const app = express();

app.use(express.json());

app.use("/api", notificationRoute )


app.listen(8080, '0.0.0.0' ,(req, res) => {
  console.log("server running on 8080");
});
