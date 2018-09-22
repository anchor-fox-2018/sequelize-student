'use strict';
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
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