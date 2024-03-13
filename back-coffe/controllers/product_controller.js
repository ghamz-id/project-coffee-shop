const { Product, Category } = require("../models");

class Product_Controller {
	// PUBLIC SITE
	static async pub_findAll(req, res, next) {
		try {
			let data = await Product.findAll();
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}

	// NEED AUTHENTICATION FITUR
	static async findAll(req, res, next) {
		try {
			let data = await Product.findAll();
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = Product_Controller;
