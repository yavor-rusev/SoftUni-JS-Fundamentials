function censoredWords(text, wordToCensor) {
    let censor = "*".repeat(wordToCensor.length);

    while (text.includes(wordToCensor)) {
        text = text.replace(wordToCensor, censor);
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');