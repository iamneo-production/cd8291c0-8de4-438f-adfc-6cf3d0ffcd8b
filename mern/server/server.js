const express = require("express");
require("dotenv").config(); //added
const mongoose=require("mongoose")
const connectDB = require("./config/db"); //added
const users = require("./routes/Users"); // added
const todo = require("./routes/todo");
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


    app.use(express.json({ extended: false }));
    app.get('/', (req, res) => res.send(__dirname));

    app.use("/api/todo", todo);

// setting up port
const port = 8080;
//const dbURI = config.get('dbURI');
// mongoose.connect(dbURI)
//   .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
//   .catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});