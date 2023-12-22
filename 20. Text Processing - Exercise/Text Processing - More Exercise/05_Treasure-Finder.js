function treasureFinder(array) {
    let keyNumbersArray = array.shift().split(" ").map(Number);
    let keyLength = keyNumbersArray.length;
    let text = array.shift();

    let matrixOfCharValuesMessages = [];

    while (text !== "find") {
        let currentMessageCharValues = [];

        for (let i = 0; i < text.length; i++) {
            let currentCharValue = text[i].charCodeAt();
            let currentKeyNumber = keyNumbersArray[i % keyLength];

            let decodedCharValue = currentCharValue - currentKeyNumber;
            currentMessageCharValues.push(decodedCharValue);
        }

        matrixOfCharValuesMessages.push(currentMessageCharValues);
        text = array.shift();
    }

    matrixOfCharValuesMessages.forEach(charValuesArray => {
        let message = "";

        charValuesArray.forEach(asciiValue => {
            message += String.fromCharCode(asciiValue);
        })

        let treasureType = message.substring(message.indexOf("&") + 1, message.lastIndexOf("&"));
        let coordinates = message.substring(message.indexOf("<") + 1, message.indexOf(">"));

        console.log(`Found ${treasureType} at ${coordinates}`);
    })
}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"
]);