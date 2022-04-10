const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({});
const {sequelize} = require('./models')
const config = require("./config/devConf");
require("./startups")
const PORT = config.PORT ?? 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.use((req, res, next) => {
    console.log("Route not found");
    res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
    if (err) {
        console.log("An error occurred: ", err.stack);
        res.json({
            error: err.message
        })
    }
})

app.listen(PORT, async () => {
    await authenticateDb();
    console.log(`Server running on port ${PORT}`);
});

async function authenticateDb() {
    await sequelize.authenticate();
    console.log("Database connected");
}