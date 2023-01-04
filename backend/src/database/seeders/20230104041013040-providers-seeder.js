'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Providers', [
      {
        id: "1",
        name: "CEDENTE 002",
        tradingName: "CEDENTE 002 LTDA",
        cashforceTax: "",
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
        bank: "",
        bankAgency: "",
        account: "",
        documents: "",
        phoneNumber: "",
        situation: "",
        situationDate: "",
        createdAt: "2020-10-29 21:22:21",
        updatedAt: "2020-10-29 21:22:22",
        cnpjId: "2",
        email: "",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Providers', null, {});
  }
};