function censoredWords(text, wordToCensor) {
    let censor = "*".repeat(wordToCensor.length);

    while (text.includes(wordToCensor)) {
        let startIndex = text.indexOf(wordToCensor);
        let endIndex = startIndex + wordToCensor.length;

        let result = text.substring(0, startIndex);
        result += censor;
        result += text.substring(endIndex);
        text = result;
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');