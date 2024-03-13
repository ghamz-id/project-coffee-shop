const express = require("express");
const router = express.Router();
const Product_Controller = require("../controllers/product_controller");

router.get("/", Product_Controller.findAll);

module.exports = router;
