const express = require('express');
const mongoose = require('mongoose');
const { getDbConnection } = require("./src/config/db_connection");
const { loadRoutes } = require("./routes");

const app = express();

mongoose.connect(getDbConnection());
const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to MongoDB!")
})

db.on('error', () => {
    console.log("Failed to connect to MongoDB!")
})

app.get("/", (req, res, next) => {
    res.send("Hello, World!");
});

loadRoutes(app);


app.listen(3000, () => console.log("Server started on port 3000"));