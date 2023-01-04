'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Buyers', [
      {
        id: "1",
        name: "SACADO 001",
        tradingName: "SACADO 001 LTDA",
        cashforceTax: "0",
        responsibleName: "",
        responsibleEmail: "",
        responsiblePosition: "",
        responsiblePhone: "",
        responsibleMobile: "",
        website: "",
        postalCode: "",
        address: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
        phoneNumber: "",
        situation: "",
        situationDate: "",
        createdAt: "2020-10-29 21:20:33",
        updatedAt: "2020-10-29 21:20:34",
        cnpjId: "1",
        confirm: "1",
        email: "",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Buyers', null, {});
  }
};