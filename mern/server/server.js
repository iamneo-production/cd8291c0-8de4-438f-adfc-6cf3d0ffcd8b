const express = require("express");
require("dotenv").config(); //added

const connectDB = require("./config/db"); //added
const users = require("./routes/users"); // added
const app = express();

connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/users", users);

// setting up port
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});