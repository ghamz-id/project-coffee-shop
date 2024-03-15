const midtransClient = require("midtrans-client");
const { User } = require("../models");

class Payment_Controller {
	static async payment(req, res, next) {
		try {
			let snap = new midtransClient.Snap({
				isProduction: false,
				serverKey: process.env.SERVER_KEY,
			});

			let parameter = {
				transaction_details: {
					order_id:
						"TRANSACTION-" + Math.floor(10_000 + Math.random() * 90_000),
					gross_amount: 10_000,
				},
				credit_card: {
					secure: true,
				},
				customer_details: {
					username: req.user.username,
					email: req.user.email,
				},
			};
			const midtrans_token = await snap.createTransaction(parameter);
			res.status(201).json(midtrans_token);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = Payment_Controller;
