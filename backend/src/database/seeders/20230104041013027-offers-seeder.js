'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Offers', [
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Offers', null, {});
  }
};