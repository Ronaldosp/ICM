'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const admin = [{
    username: 'Admin',
    email: 'admin@mail.com',
    password: hashPassword('admin123'),
    role:'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
   },{
    username: 'User',
    email: 'test@mail.com',
    password: hashPassword('test123'),
    role:'User',
    createdAt: new Date(),
    updatedAt: new Date(),
   }]
   await queryInterface.bulkInsert('Users', admin);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
