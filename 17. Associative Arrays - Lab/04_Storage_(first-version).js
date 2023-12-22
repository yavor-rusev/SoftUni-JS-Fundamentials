function storage(stringArray) {
    let storageMap = new Map;

    for (let string of stringArray) {
        let stringAsArray = string.split(" ");
        let product = stringAsArray[0];
        let quantity = Number(stringAsArray[1]);

        if (storageMap.has(product)) {
            let currentQuantity = storageMap.get(product);
            let actualisedQuantity = currentQuantity + quantity;
            storageMap.set(product, actualisedQuantity);

        } else {
            storageMap.set(product, quantity);

        }
    }

    for (let entry of storageMap.entries()) {
        let [product, quantity] = entry;
        console.log(`${product} -> ${quantity}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);