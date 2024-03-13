const express = require("express");
const router = express.Router();

const products = require("../routers/product");
const errorHandler = require("../middlewares/error_handler");
const Product_Controller = require("../controllers/product_controller");

router.get("/", (req, res) => {
	res.json("Hello World!");
});

router.get("/pub-product", Product_Controller.pub_findAll);

router.use("/products", products);

router.use(errorHandler);
module.exports = router;
