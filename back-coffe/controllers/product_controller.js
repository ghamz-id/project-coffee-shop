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

	static async add(req, res, next) {
		try {
			req.body.UserId = res.user.id;
			await Product.create(req.body);
			res.status(200).json({ msg: `Success added ${req.body.title}` });
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
			res.status(200).json({ msg: `Success updated ${req.body.title}` });
		} catch (error) {
			next(error);
		}
	}

	static async delete(req, res, next) {
		try {
			const { id } = req.params;
			const data_products = await Product.findByPk(id);
			if (!data_products) throw { name: "id_not_found" };

			await data_products.destroy({ where: { id } });
			res.status(200).json({ msg: `${data_products.title} has been deleted` });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = Product_Controller;
