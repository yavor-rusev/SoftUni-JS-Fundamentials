function replaceRepeatingChars(text) {
    let result = text[0];
    let textLength = text.length;

    for (let index = 1; index < textLength; index++) {
        let currentElement = text[index];
        let previousElement = text[index - 1];

        if (currentElement !== previousElement) {
            result += currentElement;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');