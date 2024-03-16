const app = require("../app");
const req = require("supertest");
const { User, Product } = require("../models");
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
describe("Products (public - Site)", () => {
	test("Get all data", async () => {
		let res = await req(app).get("/pub-product");
		expect(res.status).toBe(200);
		expect(res.body).toBeInstanceOf(Object);
	});
});

describe("Products (Need Authen)", () => {
	test("Get all data", async () => {
		let res = await req(app)
			.get("/products")
			.set("Authorization", `Bearer ${access_token}`);
		expect(res.status).toBe(200);
		expect(res.body).toBeInstanceOf(Object);
	});
	test("Invalid token", async () => {
		let res = await req(app).get("/products").set("Authorization", null);
		expect(res.status).toBe(401);
		expect(res.body.msg).toBe("Invalid Token");
	});
	test("Get data by params", async () => {
		let res = await req(app)
			.get("/products/1")
			.set("Authorization", `Bearer ${access_token}`);
		expect(res.status).toBe(200);
		expect(res.body).toBeInstanceOf(Object);
	});
	test("Failed get data by params", async () => {
		let res = await req(app)
			.get("/products/20")
			.set("Authorization", `Bearer ${access_token}`);
		expect(res.status).toBe(404);
		expect(res.body.msg).toBe("Data not found");
	});
});

// RESET
afterAll(async () => {
	await User.destroy({ truncate: true, cascade: true, restartIdentity: true });
});
