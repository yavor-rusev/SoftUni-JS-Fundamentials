function personalInfo(firstName, lastName, age) {
    let personObj = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return personObj;
}

console.log(personalInfo("Peter", "Pan", "20"));