const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const comparePassword = (hash, password) => {
	return bcrypt.compareSync(password, hash);
};

module.exports = {
	hashPassword,
	comparePassword,
};
