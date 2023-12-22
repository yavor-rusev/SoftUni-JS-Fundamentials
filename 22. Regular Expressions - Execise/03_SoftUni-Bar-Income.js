function SoftUniBarIncome(arr) {
    let regex = /%(?<customer>[A-Z][a-z]+)%(?:[^|$%.\d]*)<(?<product>\w+)>(?:[^|$%.\d]*)\|(?<count>\d+)\|(?:[^|$%.\d]*)(?<price>\d+[.]?\d+)\$/;
    let dayIncome = 0;

    for (let currentLine of arr) {
        let validOrder = regex.exec(currentLine);

        if (validOrder) {
            let currentName = validOrder.groups.customer;
            let currentProduct = validOrder.groups.product;
            let currentQuantity = +validOrder.groups.count;
            let currentPrice = +validOrder.groups.price;

            let totalPrice = currentQuantity * currentPrice;
            console.log(`${currentName}: ${currentProduct} - ${totalPrice.toFixed(2)}`);

            dayIncome += totalPrice;
        }
    }

    console.log(`Total income: ${dayIncome.toFixed(2)}`);
}

SoftUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);