function repeatString(str, times) {
    let newString = "";

    for (let index = 1; index <= times; index++) {
        newString += str;

    }

    return newString;
}

console.log(repeatString("abc", 3));