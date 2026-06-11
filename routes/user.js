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
import prisma from "../config/prisma.js";

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

router.post("/landmark", async (req, res) => {
  try {
    const { title, lat, lng } = req.body;
    console.log(title, lat, lng);

    const landmark = await prisma.landmark.create({
      data: {
        title: title,
        lat: Number(lat),
        lng: Number(lng),
      },
    });
    console.log(landmark);
    res.json({ message: "Create Landmark Success !!!" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/landmarks", async (req, res, next) => {
  try {
    const landmarks = await prisma.landmark.findMany({});
    res.json({ result: landmarks });
  } catch (error) {
    next(error);
  }
});

export default router;
