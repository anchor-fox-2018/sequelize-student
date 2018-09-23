const Model = require('./models')
const Students = Model.Students



    //full name
Students.findAll()
    .then(function (data) {
        data.forEach(element => {
            console.log(element.fullName())
        });
    })
    .catch(function (err) {
        console.log(err);
    })

    //get age
Students.findAll()
    .then(function (data) {
        data.forEach(element => {
            console.log(element.getAge())
        });
    })
    .catch(function (err) {
        console.log(err);
    })

    //find women
Students.findAll()
    .then(function (data) {
            console.log(Students.findFemale(data))
    })
    .catch(function (err) {
        console.log(err);
    })