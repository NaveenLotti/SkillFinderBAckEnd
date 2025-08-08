import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://Naveen:naviK%21%40%40%23%23%2306@cluster0.ambqv.mongodb.net/student_Data?retryWrites=true&w=majority&appName=Cluster0";

if (!process.env.MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI not found in .env, using fallback hardcoded URI.");
}

console.log("🔗 MongoDB URI:", MONGO_URI);

mongoose.set('strictQuery', true);


mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => {
    console.error("Failed to connect to DB:", err.message);
    process.exit(1); 
});

app.use('/api', router);

app.get('/', (req, res) => {
    res.send("🚀 Project is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌟 Server is running on port ${PORT}`);
});
