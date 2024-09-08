import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pokemonRoutes from "./routes/pokemonRoutes";

dotenv.config();

const app = express();

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set in the environment variables");
  process.exit(1);
}

console.log("Attempting to connect to MongoDB...");
console.log("MONGODB_URI:", MONGODB_URI.replace(/\/\/.*@/, "//<credentials>@")); // クレデンシャルを隠す

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.use("/api/pokemon", pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
