const Model = require('./models');
const Student = Model.Student;

Student.findAll()
    .then(data => {
        data.forEach(element => {
            console.log(`${element.getFullName()} berumur ${element.getAge()} tahun.`);

        })
    })
    .catch(err => {
        console.log(err)
    })

Student.getFemaleStudents()
    .then(data => {
        data.forEach(element => {
            console.log(`${element.getFullName()}`);

        })
    })
    .catch(err => {
        console.log(err)
    })