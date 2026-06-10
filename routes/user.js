import express from "express";
// Controllers
import {
  listUser,
  readUser,
  createUser,
  updateRoleUser,
  deleteUser,
  getMe,
} from "../controllers/user.js";
// Middleware
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
router.patch("/user/role/:id", authCheck, updateRoleUser);
router.delete("/user/:id", authCheck, deleteUser);

// ENDPOINT http://localhost:8000/api/getme
router.get("/getme", authCheck, getMe);

router.get("/user", readUser);
router.post("/user", createUser);

// Exprort
export default router;
