const errorHandler = (err, req, res, next) => {
	switch (err.name) {
		case "require_email":
			res.status(400).json("Please insert your email");
			break;
		case "require_password":
			res.status(400).json("Please insert your password");
			break;
		case "wrong_password":
			res.status(401).json("Email or password is wrong");
			break;
		case "invalid_token":
		case "JsonWebTokenError":
			res.status(401).json("Invalid Token");
			break;
		case "user_not_found":
			res.status(404).json("Please register first");
			break;
		case "id_not_found":
			res.status(404).json("Data not found");
			break;
		default:
			res.status(500).json("internal server error");
			break;
	}
};

module.exports = errorHandler;
