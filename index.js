import connectToMongo from "./database/db.js";
import express from "express";
import auth from "./routes/auth.js";
import Notes from "./routes/notes.js";
import cors from "cors";

connectToMongo();
const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());
// Available routes
app.use("/api/auth", auth);
app.use("/api/notes", Notes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
