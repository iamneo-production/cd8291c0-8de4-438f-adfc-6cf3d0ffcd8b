const express = require("express");
require("dotenv").config(); //added
const mongoose=require("mongoose")
const connectDB = require("./config/db"); //added
const users = require("./routes/Users"); // added
const emps = require("./routes/Emps");
//const todo = require("./routes/todo");
const path=require("path");
const cors = require('cors');
const bodyParser = require('body-parser');

const { debugPort } = require("process");
const app = express();
app.use(cors());

connectDB();//added
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// initialize middleware
//app.use(express.json({ extended: false }));
//app.use(express.static('client/build'));
//app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//   });
 //app.get("/", (req, res) => res.send(__dirname));


app.use("/api/user", users);
app.use("/api/employee", emps);

    app.use(express.json({ extended: false }));
    app.get('/', (req, res) => res.send(__dirname));

   
const port = 8080;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});