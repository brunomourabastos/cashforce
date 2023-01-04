'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: "1",
        name: "ALLAN SOUZA",
        email: "allan@cashforce.com.br",
        phoneNumber: "",
        mobile: "",
        departament: "",
        verificationCode: "",
        emailChecked: "1",
        createdAt: "2020-10-01 21:31:37",
        updatedAt: "2020-10-01 22:41:23",
        cashforceAdm: "1",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};