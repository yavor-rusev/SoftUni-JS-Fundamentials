function furniture(arr) {
    let regex = />>(?<productName>[A-Z][\w]*)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)/;
    let totalMoney = 0;

    console.log("Bought furniture:");

    let line = arr.shift();

    while (line !== 'Purchase') {
        let validFurniture = line.match(regex);

        if (validFurniture) {
            let item = validFurniture.groups.productName;
            let price = +validFurniture.groups.price;
            let quantity = +validFurniture.groups.quantity;

            console.log(item);
            totalMoney += price * quantity;
        }

        line = arr.shift();
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);