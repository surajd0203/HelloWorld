import express from "express";
import {
  listController,
  registerController,
  sendController,
  userDetail,
  userList,
} from "./controller.js";

const router = express.Router();

router.post("/register", registerController);

router.get("/listAll", listController);

router.post("/send", sendController);

router.post("/usercreate", userDetail);

router.get("/users", userList)

export default router;
