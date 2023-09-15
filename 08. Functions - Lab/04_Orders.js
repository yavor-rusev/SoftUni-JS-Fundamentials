function orders(product, quantity) {
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;

    let totalPrice = 0;

    switch (product) {
        case "coffee": totalPrice = coffee * quantity; break;
        case "water": totalPrice = water * quantity; break;
        case "coke": totalPrice = coke * quantity; break;
        case "snacks": totalPrice = snacks * quantity; break;

    }

    console.log(totalPrice.toFixed(2));
}

orders("water", 5);