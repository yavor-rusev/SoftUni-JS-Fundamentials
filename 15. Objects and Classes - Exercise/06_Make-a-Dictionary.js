function makeADictionary(jsonStringsArray) {
    let dictionary = [];
    let sortedObject = {};

    for (let jsonString of jsonStringsArray) {

        let currentObject = JSON.parse(jsonString);

        let property = Object.entries(currentObject);
        dictionary.push(property[0]);
    }

    dictionary.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [term, definition] of dictionary) {

        if (!sortedObject.hasOwnProperty(term)) {
            sortedObject[term] = "";
        }

        sortedObject[term] = definition;
    }

    for (let property in sortedObject) {
        console.log(`Term: ${property} => Definition: ${sortedObject[property]}`);

    }
}



makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);