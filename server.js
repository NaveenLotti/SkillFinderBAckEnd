import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/routes.js";

dotenv.config();
console.log("MONGO URI:", process.env.MONGODB_URI); // debug

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.set('serverSelectionTimeoutMS', 5000); // 5 sec timeout

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ Failed to connect to DB:", err.message));

app.use('/api', router);

app.get('/', (req, res) => {
    res.send("Project is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
