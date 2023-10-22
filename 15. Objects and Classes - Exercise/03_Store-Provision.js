function storeProvision(availableStock, orderedStock) {
    let products = {};

    for (let index = 0; index < availableStock.length; index += 2) {
        let availableProduct = availableStock[index];
        let availableQuantity = Number(availableStock[index + 1]);

        products[availableProduct] = availableQuantity;
    }

    for (let index = 0; index < orderedStock.length; index += 2) {
        let orderedProduct = orderedStock[index];
        let orderedQuantity = Number(orderedStock[index + 1]);

        if (!products.hasOwnProperty(orderedProduct)) {
            products[orderedProduct] = 0;
        }

        products[orderedProduct] += orderedQuantity;
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);

    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']
);