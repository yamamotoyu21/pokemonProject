"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const pokemonRoutes_1 = __importDefault(require("./routes/pokemonRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/pokemon-game";
if (!MONGODB_URI) {
    console.error("MONGODB_URI is not set in the environment variables");
    process.exit(1);
}
console.log("Attempting to connect to MongoDB...");
console.log("MONGODB_URI:", MONGODB_URI.replace(/\/\/.*@/, "//<credentials>@")); // クレデンシャルを隠す
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});
app.use("/api/pokemon", pokemonRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
