require("dotenv").config();
const cors = require("cors");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
// ROUTES
const serviceRoutes = require('./routes/services-routes');
app.use(serviceRoutes);

app.get('/', (_req, res) => {
    res.send("Industry 2b's API");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});