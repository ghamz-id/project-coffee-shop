const express = require("express");
const router = express.Router();
const Product_Controller = require("../controllers/product_controller");

router.get("/", Product_Controller.findAll);
router.post("/", Product_Controller.add);
router.put("/:id", Product_Controller.update);
router.delete("/:id", Product_Controller.delete);

module.exports = router;
