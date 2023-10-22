function computerStore(input) {
    let sumNoTaxes = 0;
    let command = input.shift();

    while (command !== 'special' && command !== 'regular') {
        let partPrice = Number(command);

        if (partPrice < 0) {
            console.log("Invalid price!");
            command = input.shift();
            continue;
        }

        sumNoTaxes += partPrice;
        command = input.shift();
    }

    let taxes = 0.20 * sumNoTaxes;
    let totalPrice = sumNoTaxes + taxes;

    if (command === 'special') {
        totalPrice *= 0.90;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumNoTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 
    'regular'
]);