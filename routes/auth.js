import express from "express";
// Controllers
import { register, login } from "../controllers/auth.js";
import {
  loginSchema,
  registerSchema,
  validateSchema,
} from "../validations/validator.js";

const router = express.Router();

//ENDPOINT http://localhost:8000/auth/register
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);

// Export
export default router;
