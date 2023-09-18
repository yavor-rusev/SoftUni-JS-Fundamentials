function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let allCharsBetween = [];

    for (let index = startChar + 1; index < endChar; index++) {

        let currentChar = String.fromCharCode(index);
        allCharsBetween.push(currentChar);

    }

    console.log(allCharsBetween.join(" "));
}

charactersInRange('a', 'd');