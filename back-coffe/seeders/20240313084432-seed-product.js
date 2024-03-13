"use strict";

const axios = require("axios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
    let products = data.map((product) => {
      delete product.id;
      product.createdAt = new Date();
      product.updatedAt = new Date();
      product.price = 0;
      product.UserId = 1;
      product.CategoryId = 1;
      return product;
    });
    await queryInterface.bulkInsert("Products", products);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
