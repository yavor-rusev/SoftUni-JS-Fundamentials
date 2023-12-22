function stringSubstring(searchedWord, text) {
    let textAsArray = text.split(" ");

    for (let currentWord of textAsArray) {
        if (searchedWord.toLowerCase() === currentWord.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language')