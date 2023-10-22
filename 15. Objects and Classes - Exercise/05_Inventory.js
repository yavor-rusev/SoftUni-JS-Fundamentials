function inventory(arrayOfStrings) {
    let heroesArray = [];

    for (let string of arrayOfStrings) {
        let [name, level, items] = string.split(" / ");

        heroesArray.push({
            Hero: name,
            level: Number(level),
            items
        });
    }

    heroesArray.sort((a, b) => a.level - b.level);

    for (let heroObj of heroesArray) {
        console.log(`Hero: ${heroObj.Hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);

    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);