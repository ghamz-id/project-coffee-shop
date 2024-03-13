const { comparePassword } = require("../helpers/brcypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class User_Controller {
	static async login(req, res, next) {
		try {
			const { email, password } = req.body;
			if (!email) throw { name: "require_email" };
			if (!password) throw { name: "require_password" };

			const user = await User.findOne({ where: { email } });
			if (!user) throw { name: "user_not_found" };

			const cek_password = comparePassword(password, user.password);
			if (!cek_password) throw { name: "wrong_password" };

			const access_token = signToken({ id: user.id });

			res.status(200).json({
				access_token: access_token,
				username: user.username,
				email: user.email,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = User_Controller;
