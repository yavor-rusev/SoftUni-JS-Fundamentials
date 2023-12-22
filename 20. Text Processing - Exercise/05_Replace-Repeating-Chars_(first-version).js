function replaceRepeatingChars(text) {
    let result = "";
    let textLength = text.length;

    for (let index = 1; index < textLength; index++) {
        let currentElement = text[index];
        let previousElement = text[index - 1];

        if (result.length === 0) {
            result += previousElement;
        }

        if (currentElement !== previousElement) {
            result += currentElement;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');