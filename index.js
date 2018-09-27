const Model = require("./models");
const Student = Model.Student;

// Student.findAll()
//     .then(function (data) {
//         //console.log(data);
//         data.forEach(element => {
//             console.log(element.getFullName());
//             console.log(element.getAge());
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// Student.findAll()
//     .then(function (data) {
//         //console.log(Student.getFemaleStudent(data));
//         data.forEach(element => {
//             console.log(element.getFullName());
//         });
//     });

Student.create({
    first_name: "Dummy",
    last_name: "DummY",
    gender: "undefined",
    birthday: new Date(),
    email: "nora@treutel.name",
    height: 151,
    phone: "081212/"
});

//example
// Student.create({
//     first_name: "Awtian",
//     last_name: "Akbar",
// });