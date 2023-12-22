function storage(stringArray) {
    let storageMap = new Map;

    for (let string of stringArray) {
        let stringAsArray = string.split(" ");
        let product = stringAsArray[0];
        let quantity = Number(stringAsArray[1]);

        if (!storageMap.has(product)) {
            storageMap.set(product, 0);
        }

        storageMap.set(product, storageMap.get(product) + quantity);
    }

    for (let keyAndValuePair of storageMap) {
        console.log(`${keyAndValuePair[0]} -> ${keyAndValuePair[1]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);