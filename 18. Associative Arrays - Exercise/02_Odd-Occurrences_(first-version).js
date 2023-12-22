function oddOccurrences(input) {
    let sentenceToLowerCase = input.split(" ").map(a => a = a.toLowerCase());
    let words = {};

    sentenceToLowerCase.forEach(currentWord => {
        if (!words.hasOwnProperty(currentWord)) {
            words[currentWord] = 1;

        } else {
            words[currentWord] += 1;

        }
    });

    let filteredWords = Object.entries(words).filter(([word, count]) => count % 2 !== 0);
    let sortedWords = filteredWords.sort((doubleA, doubleB) => doubleB[1] - doubleA[1]);

    let printLine = "";
    printLine = sortedWords.map(([word, count]) => {
        return printLine += `${word} `;
    })

    console.log(printLine[printLine.length - 1]);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');