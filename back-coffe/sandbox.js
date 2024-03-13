const axios = require("axios");

const tes = async () => {
	try {
		let { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
		let products = data.map((product) => {
			product.createdAt = product.updatedAt = new Date();
			product.UserId = product.CategoryId = 1;
			product.price = 0;
			let {
				title,
				description,
				image,
				createdAt,
				updatedAt,
				UserId,
				CategoryId,
				price,
			} = product;
			return {
				title,
				description,
				image,
				createdAt,
				updatedAt,
				UserId,
				CategoryId,
				price,
			};
		});
		console.log(products);
	} catch (error) {
		console.error(error);
	}
};
tes();
