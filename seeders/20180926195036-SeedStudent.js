'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      first_name: "Nikolas",
      last_name: "Friesen",
      gender: "female",
      birthday: new Date("1998-12-24"),
      email: "agustina_braun@wintheiser.info",
      phone: "449.897.7415",
      height: 151,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Randi",
      last_name: "Halvorson",
      gender: "male",
      birthday: new Date("1997-01-29"),
      email: "heber.upton@bechtelarwisozk.biz",
      phone: "(697)436-2633",
      height: 152,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Sally",
      last_name: "Buckridge",
      gender: "female",
      birthday: new Date("1997-10-30"),
      email: "nora@treutel.name",
      phone: "1-351-672",
      height: 153,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
