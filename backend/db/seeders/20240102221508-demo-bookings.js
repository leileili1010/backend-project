'use strict';

const { Booking } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 2,
        startDate: '2024-12-19',
        endDate: '2024-12-22'
      },
      {
        spotId: 2,
        userId: 4,
        startDate: '2024-11-19',
        endDate: '2024-11-24'
      },
      {
        spotId: 3,
        userId: 3,
        startDate: '2024-10-11',
        endDate: '2024-10-17'
      },
      {
        spotId: 3,
        userId: 4,
        startDate: '2023-12-21',
        endDate: '2023-12-25'
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3]}
    }, {});
  }
};
