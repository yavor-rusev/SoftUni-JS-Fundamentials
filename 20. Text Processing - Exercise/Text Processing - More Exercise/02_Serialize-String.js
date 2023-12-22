function serializeString(array) {
    let text = array[0];
    let textLength = text.length;

    let charsMap = new Map();

    for (let index = 0; index < textLength; index++) {
        let char = text[index];

        if (!charsMap.has(char)) {
            charsMap.set(char, []);
        }

        let currentCharIndexesArray = charsMap.get(char);
        currentCharIndexesArray.push(index);
    }

    for (let entry of charsMap) {
        let [key, value] = entry;
        console.log(`${key}:${value.join("/")}`);
    }
}

// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);