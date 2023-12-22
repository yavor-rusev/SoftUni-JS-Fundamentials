function wordOccurrences(words) {
    let checkedWords = [];
    let filteredWordsMatrix = [];

    for (let index = 0; index < words.length; index++) {
        let currentWord = words[index];

        if (!checkedWords.includes(currentWord)) {
            let currentWordOccurrencesArray = words.filter(a => a === currentWord);
            checkedWords.push(currentWord);
            filteredWordsMatrix.push(currentWordOccurrencesArray);
        }
    }

    let sortedWordsMatrix = filteredWordsMatrix.sort((a, b) => b.length - a.length);

    for (let currentWordArray of sortedWordsMatrix) {
        let currentWord = currentWordArray[0];
        console.log(`${currentWord} -> ${currentWordArray.length} times`);
    }
}

wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence"
]);