import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect('mongodb://localhost:27017/SkillFinder', 
   { useNewUrlParser: true,
    useUnifiedTopology: true
   }
).then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Failed to connect to DB");
    });

app.use('/api', router);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.get('/', (req, res) => {
    res.send("Project is running");
});
