const express = require("express");
require("dotenv").config(); //added
const cors=require("cors");
const connectDB = require("./config/db"); //added
const users = require("./routes/Users"); // added
const app = express();

connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/users", users);
app.use(cors);
// setting up port
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});