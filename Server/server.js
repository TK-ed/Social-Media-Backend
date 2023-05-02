// importing libraries
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

// importing files
import router from "./routes/user.js";

// dotenv variables
const port = process.env.PORT;
const db = process.env.MONG_URI;

// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", router);

// routes
app.get("/", (req, res) => {
  res.status(200).send("Haiiiyyaaa!!");
});

// port n db connection
mongoose.connect(db).then(() => {
  try {
    // connecting port
    app.listen(port, () => {
      console.log(`Connected to DB n listenin' on port ${port}`);
    });
  } catch (err) {
    console.log(`Uh-Oh something's wrong!!`);
  }
});
