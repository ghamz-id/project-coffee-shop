require("dotenv").config();
const cors = require("cors");

const express = require("express");
const router = require("./routers");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app;
