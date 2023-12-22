function countStringOccurrences(sentence, word) {
    let arr = sentence.split(" ");
    let count = 0;

    for (let el of arr) {
        el === word ? count++ : count;
    }

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