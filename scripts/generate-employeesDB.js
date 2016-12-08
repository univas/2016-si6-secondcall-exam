"use strict"

const pad = require("pad")
const faker = require("faker")
const fs = require("fs")

const employeeDB = []
faker.locale = "pt_BR"

const generateDateOfBirth = () => {
    const dateOfBirth = faker.date.past(20, "2005-12-31")
    const year  = dateOfBirth.getFullYear()
    const month = pad(2, (dateOfBirth.getMonth() + 1), "0")
    const day   = pad(2, dateOfBirth.getDay(), "0")
    return `${year}/${month}/${day}`
}

for (let employeeNumber = 1; employeeNumber <= 100; employeeNumber++) {
    const firstName = faker.name.firstName() 
    const lastName = faker.name.lastName()

    employeeDB.push({
        "id": pad(3, employeeNumber, "0"),
        "name": firstName + " " + lastName,
        "email": faker.internet.email(firstName, lastName).toLowerCase(),
        "photo": faker.image.people(128, 128),
        "jobTitle": faker.name.jobTitle(),
        "dateOfBirth": generateDateOfBirth()
    })
}

const output = JSON.stringify(employeeDB, null, 2)
fs.writeFile("./app/employeeDB.json", output, function(err) {
    if(err) throw err
    console.log("The employeeDB.js has been generated!")
})