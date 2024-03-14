const { Product } = require("../models");

class Product_Controller {
	// PUBLIC SITE
	static async pub_findAll(req, res, next) {
		try {
			const data_products = await Product.findAll();
			res.status(200).json(data_products);
		} catch (error) {
			next(error);
		}
	}

	// NEED AUTHENTICATION FITUR
	static async findAll(req, res, next) {
		try {
			const data_products = await Product.findAll();
			res.status(200).json(data_products);
		} catch (error) {
			next(error);
		}
	}

	static async update(req, res, next) {
		try {
			const { id } = req.params;
			const data_products = await Product.findByPk(id);
			if (!data_products) throw { name: "id_not_found" };

			await data_products.update(req.body, { where: { id } });
			res.status(200).json(data_products);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = Product_Controller;
