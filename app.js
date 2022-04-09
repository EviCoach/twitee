const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {sequelize} = require('./models')
const config = require("./config/devConf");
dotenv.config({});
const PORT = config.PORT ?? 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/", require("./routes"));


app.listen(PORT, async () => {
    await main();
    console.log(`Server running on port ${PORT}`);
});

async function main() {
    await sequelize.sync({ force: true });
}