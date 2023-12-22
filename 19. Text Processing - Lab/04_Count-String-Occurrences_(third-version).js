function countStringOccurrences(sentence, word) {
    let arr = sentence.split(" ");
    let count = arr.filter(a => a === word).length;

    console.log(count);
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);

countStringOccurrences(
    'softuni is great place for learning new programming languages',
    'softuni'
);