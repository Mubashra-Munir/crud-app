const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bcrypt = require('bcrypt')
const DbConnection = require('./config/connection')
const dotenv = require('dotenv').config()
const users = require("./models/userSchema");
const router = require("./routes/router");
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }))
app.use(cors())
app.use(router)
DbConnection()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
)




