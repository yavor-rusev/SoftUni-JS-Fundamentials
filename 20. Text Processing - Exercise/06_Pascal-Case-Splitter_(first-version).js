function pascalCaseSplitter(text) {
    let currentWord = text[0];
    let wordsArray = [];

    let textLength = text.length;

    for (let index = 1; index < textLength; index++) {
        let char = text[index];

        if (char !== char.toUpperCase()) {
            currentWord += char;

        } else {
            wordsArray.push(currentWord);

            if (index !== textLength - 1) {
                currentWord = char;
            }
        }
    }

    wordsArray.push(currentWord);
    console.log(wordsArray.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');