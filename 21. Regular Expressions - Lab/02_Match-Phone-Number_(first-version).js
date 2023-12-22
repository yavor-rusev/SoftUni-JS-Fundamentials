function matchPhoneNumber(input) {
    let text = input[0];
    let regex = /\+359(-| )[2]\1[\d]{3}\1[\d]{4}\b/g;

    let validNumbers = [];

    let validNumber = regex.exec(text);

    while (validNumber) {
        validNumbers.push(validNumber[0]);
        validNumber = regex.exec(text);
    }

    console.log(validNumbers.join(", "));
}

matchPhoneNumber([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);