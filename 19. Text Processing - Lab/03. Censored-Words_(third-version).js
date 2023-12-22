function censoredWords(text, wordToCensor) {
    let censor = "*".repeat(wordToCensor.length);
    let result = text.split(wordToCensor).join(censor);

    console.log(result);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');