// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')
const userRouter = require("../backend/routers/user.router");
const databaseConnection = require("../backend/db");
dotenv.config();
const app = express();
databaseConnection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
bodyParser.urlencoded({extended:true})


// Routes
app.use("/", userRouter);

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});