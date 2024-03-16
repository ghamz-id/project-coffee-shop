const app = require("../app");
const req = require("supertest");
const { User } = require("../models");
const { signToken } = require("../helpers/jwt");

let access_token; //global token
beforeAll(async () => {
	// SEEDING
	let user = await User.bulkCreate(
		[
			{
				username: "admin",
				email: "admin@mail.com",
				role: "admin",
				password: "admin",
			},
		],
		{ individualHooks: true }
	); // perlu ada, jika pakai bulkCreate

	access_token = signToken({ id: user[0].id });
});

// Process testing
describe("Get data (public - Site)", () => {
	test("Success get data", async () => {
		let res = await req(app).get("/pub-category");
		expect(res.status).toBe(200);
		expect(res.body).toBeInstanceOf(Object);
	});
});

describe("Get data (Need Authen)", () => {
	test("Success get data", async () => {
		let res = await req(app)
			.get("/category")
			.set("Authorization", `Bearer ${access_token}`);
		expect(res.status).toBe(200);
		expect(res.body).toBeInstanceOf(Object);
	});
	test("Invalid Token", async () => {
		let res = await req(app).get("/category").set("Authorization", null);
		expect(res.status).toBe(401);
		expect(res.body.msg).toBe("Invalid Token");
	});
});

// RESET
afterAll(async () => {
	await User.destroy({ truncate: true, cascade: true, restartIdentity: true });
});
