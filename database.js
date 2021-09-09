const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifieldTopology: true,
    });
}

module.exports = connectToDB