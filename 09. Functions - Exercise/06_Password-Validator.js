function passwordValidator(inputData) {
    let inputDataLength = inputData.length;
    let passIsValid = true;

    let lengthIsValid = inputDataLength >= 6 && inputDataLength <= 10;

    if (!lengthIsValid) {
        console.log("Password must be between 6 and 10 characters");
        passIsValid = false;

    }

    let atLeastTwoDigitsCounter = 0;

    for (index = 0; index < inputDataLength; index++) {

        let currentChar = inputData[index];

        let charIsDigit = currentChar.charCodeAt() >= 48 && currentChar.charCodeAt() <= 57;
        let charIsCapitalLetter = currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90;
        let charIsSmallLetter = currentChar.charCodeAt() >= 97 && currentChar.charCodeAt() <= 122;
        let onlyLettersAndDigits = charIsDigit || charIsCapitalLetter || charIsSmallLetter;

        if (!onlyLettersAndDigits) {
            passIsValid = false;
            console.log("Password must consist only of letters and digits");
            break;

        }

        if (charIsDigit) {
            atLeastTwoDigitsCounter++;

        }
    }

    if (atLeastTwoDigitsCounter < 2) {
        passIsValid = false;
        console.log("Password must have at least 2 digits");

    }

    if (passIsValid) {
        console.log("Password is valid");

    }
}

passwordValidator('logIn');