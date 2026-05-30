import express from "express";
import cors from "cors";
import morgan from "morgan";

// Routing
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();

// Basic middlewares
app.use(cors()); // Allow creoss domains
app.use(morgan("dev")); // Show logs
app.use(express.json()); // for read body

// Routing GET, POST, PUT, PATCH, DELETE
app.use("/api", userRouter);
app.use("/auth", authRouter);

app.use("/api", userRouter);

// Error Handling
app.use((err, req, res, next) => {
  // code body
  console.log(err.message);
  res
    .status(err.code || 500)
    .json({ message: err.message || "Something Wrong!!!" });
});

const PORT = 8000;
// Start Server
app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
