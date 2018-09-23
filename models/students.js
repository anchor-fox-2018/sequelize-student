'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.DATE,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT
  }, {})

  Students.associate = function(models) {
    // associations can be defined here
  };

  /////////////////////
  // INSTANCE METHOD //
  /////////////////////

  // GET FULL NAME
  Students.prototype.fullName = function() {
    return this.first_name + ' ' + this.last_name
  };

  // GET AGE
  Students.prototype.getAge = function() {
    return new Date().getFullYear() - Number(this.birthday.split('-')[0]);
  }

  //////////////////
  // CLASS METHOD //
  //////////////////

  Students.findFemale = function(all) {
    return all.filter(each => (each.gender === 'female'))
  }



  return Students
}