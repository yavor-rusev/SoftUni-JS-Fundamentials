function modernTimesOfHashTag(text) {
    let textArray = text.split(" ");

    for (let element of textArray) {
        if (element[0] === "#" && element.length > 1) {

            let word = element.replace("#", "");
            let foundInvalidChar = false;

            for (let i = 0; i < word.length; i++) {
                if (word.charCodeAt(i) < 65 || (word.charCodeAt(i) > 90 && word.charCodeAt(i) < 97) || word.charCodeAt(i) > 122) {
                    foundInvalidChar = true;
                    break;
                }
            }

            if (foundInvalidChar) {
                continue;
            }

            console.log(word);
        }
    }
}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');