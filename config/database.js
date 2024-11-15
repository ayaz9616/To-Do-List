const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("db connected successfully"))
    .catch((error) => {
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1); // Exit the process with a failure code
    });
};

module.exports = dbConnect;
