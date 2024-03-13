const { Category } = require("../models");

class Category_Controller {
	// PUBLIC SITE
	static async pub_findAll(req, res, next) {
		try {
			const data_category = await Category.findAll({
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			});
			res.status(200).json(data_category);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = Category_Controller;
