import express from "express";
import {
  idMsgController,
  listController,
  registerController,
  sendController,
  userDetailController,
  userListController,
} from "./controller.js";

const router = express.Router();

router.post("/register", registerController);

router.get("/listAll", listController);

router.post("/send", sendController);

router.post("/usercreate", userDetailController);

router.get("/users", userListController);

router.post("/idmsg", idMsgController)

export default router;
