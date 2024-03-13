const errorHandler = (err, req, res, next) => {
	switch (err.name) {
		default:
			res.status(500).json({ msg: "internal server error" });
			break;
	}
};

module.exports = errorHandler;
