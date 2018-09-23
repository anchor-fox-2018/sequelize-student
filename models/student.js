'use strict';
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Invalid email"
                }
            }
        },
        phone: DataTypes.STRING,
        tinggi_badan: DataTypes.INTEGER,
        validate: {
            min: {
                args: 150,
                msg: "Minimum 150"
            }
        }
    }, {});
    Student.associate = function(models) {
        // associations can be defined here
    };

    Student.prototype.getFullName = function() {
        return this.first_name + " " + this.last_name
    }

    Student.prototype.getAge = function() {
        let current = new Date();
        let birthday = new Date(this.birthday);
        return current.getFullYear() - birthday.getFullYear();
    }

    Student.getFemaleStudents = function() {
        return Student.findAll({
            where: {
                gender: 'female'
            }
        })
    }

    return Student;
};