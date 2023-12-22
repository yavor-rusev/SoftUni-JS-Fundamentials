function adAstra([text]) {
    let totalCalories = 0;
    let days = 0;

    let regexp = /([#|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,5})\1/g;
    let matches = [...text.matchAll(regexp)];

    for (let match of matches) {
        let { kcal } = match.groups;
        totalCalories += Number(kcal);
    }

    days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    matches.forEach((food) => console.log(`Item: ${food.groups.item}, Best before: ${food.groups.expDate}, Nutrition: ${food.groups.kcal}`));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);