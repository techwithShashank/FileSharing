import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import DBConnection from "./database/db.js";
// express ko intialize liya app pe
const app = express();
app.use(cors());
app.use("/", router);
// ab ye express kon se port pe chalega
const PORT = 8000;

DBConnection();

// server ko start karne ke listen ka use karenge
app.listen(PORT, () => {
  console.log("Server is Running On port 8000");
});
