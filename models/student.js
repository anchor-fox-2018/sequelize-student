'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Salah format email"
        },
      },
      unique: {
        args: true,
        msg: "Email sudah dipakai"
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        checkheight() {
          if (this.height <= 150) {
            throw new Error("Height must be more than 150 cm tall");
          }
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkPhone() {
          if (this.phone.length < 10 && this.phone.length > 13) {
            throw new Error("Phone length must be 10 - 13");
          }
        },
        checkLetter() {
          let letterExist = false;
          const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+/*+.?<>,;:'";
          for (let i = 0; i < this.phone.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
              if (this.phone[i] === alphabet[j]) {
                letterExist = true;
              }
            }
          }
          if (letterExist) {
            throw new Error("Phone now allow letter and alphanumeric");
          }
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here

  };
  //instance method
  Student.prototype.getFullName = function () {
    return this.first_name + " " + this.last_name;
  };
  //instance method
  Student.prototype.getAge = function () {
    let birth = new Date(this.birthday);
    let diff = Date.now() - birth.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };
  //class method
  Student.getFemaleStudent = function (models) {
    let array = [];
    for (let index = 0; index < models.length; index++) {
      if (models[index].gender === "female") {
        array.push(models[index]);
      }
    }
    return array;
    //return models.filter(each => each.gender === "female");
  };
  return Student;
};