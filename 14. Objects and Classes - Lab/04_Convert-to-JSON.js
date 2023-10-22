function convertToJSON(firstName, lastName, hairColor) {
    let personObj = {
        name: firstName
    };

    personObj['lastName'] = lastName;
    personObj.hairColor = hairColor;

    let jsonString = JSON.stringify(personObj);

    console.log(jsonString);
}

convertToJSON('George', 'Jones', 'Brown');