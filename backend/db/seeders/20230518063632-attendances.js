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
    options.tableName = 'Attendances';
    await queryInterface.bulkInsert(options, [
      {
        eventId: 1,
        userId: 2,
        status: "attending"
      },
      {
        eventId: 1,
        userId: 4,
        status: "attending"
      },
      {
        eventId: 2,
        userId: 1,
        status: "attending"
      },
      {
        eventId: 2,
        userId: 3,
        status: "waitlist"
      },
      {
        eventId: 3,
        userId: 4,
        status: "attending"
      },
      {
        eventId: 3,
        userId: 3,
        status: "pending"
      },
      {
        eventId: 4,
        userId: 2,
        status: "attending"
      },
      {
        eventId: 4,
        userId: 1,
        status: "waitlist"
      },
      {
        eventId: 4,
        userId: 4,
        status: "pending"
      },
      {
        eventId: 5,
        userId: 4,
        status: "attending"
      },
      {
        eventId: 5,
        userId: 2,
        status: "waitlist"
      },
      {
        eventId: 5,
        userId: 3,
        status: "attending"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Attendances';
    await queryInterface.bulkDelete(options);
  }
};
