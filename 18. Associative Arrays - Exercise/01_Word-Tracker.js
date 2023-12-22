function wordTracker(input) {
    let wordsToFind = input.shift().split(" ");
    let wordsArranged = new Map;

    for (let searchWord of wordsToFind) {
        if (!wordsArranged.has(searchWord)) {
            wordsArranged.set(searchWord, 0);
        }

        for (let currentWord of input) {
            if (currentWord === searchWord) {
                let currentValue = wordsArranged.get(searchWord);
                wordsArranged.set(searchWord, currentValue + 1);
            }
        }
    }

    let wordsSorted = Array.from(wordsArranged).sort((a, b) => b[1] - a[1]);

    wordsSorted.forEach(word => {
        console.log(word.join(" - "));
    })
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]
);