function wordOccurrences(words) {
    let wordsObj = {};

    for (let currentWord of words) {
        if (!wordsObj.hasOwnProperty(currentWord)) {
            wordsObj[currentWord] = 0;
        }

        wordsObj[currentWord]++;
    }

    let wordsObjAsArray = Object.entries(wordsObj);
    let sortedWordsMatrix = wordsObjAsArray.sort((wordA, wordB) => wordB[1] - wordA[1]);

    for (let [currentWord, count] of sortedWordsMatrix) {
        console.log(`${currentWord} -> ${count} times`);
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