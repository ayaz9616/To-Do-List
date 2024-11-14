const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes); // Corrected route prefix

const dbConnect = require("./config/database");
dbConnect(); // Moved this above app.listen to ensure database connection

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>This is my homepage</h1>`);
});
