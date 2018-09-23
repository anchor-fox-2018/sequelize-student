'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.DATE,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT
  }, {});
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};