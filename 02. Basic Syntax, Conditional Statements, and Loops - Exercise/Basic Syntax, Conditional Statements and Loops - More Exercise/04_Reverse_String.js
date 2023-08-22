function reverseString(input) {
    let word = String(input);
    let wordReversed = ``;

    for (let i = word.length - 1; i >= 0; i--) {
        let currCharacter = word[i];
        wordReversed += currCharacter;

    }

    console.log(wordReversed);

}

reverseString(1234);