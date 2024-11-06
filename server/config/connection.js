const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected with MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = DbConnection;