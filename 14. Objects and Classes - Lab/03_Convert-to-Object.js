function convertToObject(jsonStr) {
    let personObj = JSON.parse(jsonStr);

    for (let key of Object.keys(personObj)) {
        console.log(`${key}: ${personObj[key]}`);

    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');