const express = require("express");
const router = express.Router();
const Product_Controller = require("../controllers/product_controller");

router.get("/", Product_Controller.findAll);
router.put("/:id", Product_Controller.update);

module.exports = router;
