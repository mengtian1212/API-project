'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};

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
    options.tableName = 'Memberships';
    try {
      await queryInterface.bulkInsert(options, [
        {
          userId: 1,
          groupId: 2,
          status: 'pending'
        },
        {
          userId: 4,
          groupId: 2,
          status: 'member'
        },
        {
          userId: 3,
          groupId: 1,
          status: 'co-host'
        },
        {
          userId: 2,
          groupId: 1,
          status: 'member'
        },
        {
          userId: 2,
          groupId: 3,
          status: 'pending'
        },
        {
          userId: 1,
          groupId: 3,
          status: 'co-host'
        },
        {
          userId: 4,
          groupId: 1,
          status: 'co-host'
        },
        {
          userId: 4,
          groupId: 3,
          status: 'member'
        },
        {
          userId: 3,
          groupId: 3,
          status: 'member'
        }
      ], {});
    } catch (err) {
      console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Memberships';
    await queryInterface.bulkDelete(options);
  }
};