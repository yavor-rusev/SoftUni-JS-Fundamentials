function pirates(arr) {
    let cities = {};

    while (arr[0] != "Sail") {
        let line = arr.shift();
        let [city, population, gold] = line.split("||");
        population = Number(population);
        gold = Number(gold);

        if (!cities[city]) {
            cities[city] = { population: 0, gold: 0 };
        }

        cities[city].population += population;
        cities[city].gold += gold;
    }

    let sailCommand = arr.shift();

    while (arr[0] != "End") {
        let line = arr.shift();
        let tokens = line.split("=>");
        let action = tokens[0];
        let town = tokens[1];

        switch (action) {
            case "Plunder":
                let peopleKilled = Number(tokens[2]);
                let goldStolen = Number(tokens[3]);

                cities[town].population -= peopleKilled;
                cities[town].gold -= goldStolen;

                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }

                break;

            case "Prosper":
                let goldToAdd = Number(tokens[2]);

                if (goldToAdd < 0) {
                    console.log("Gold added cannot be a negative number!");
                    continue;
                }

                cities[town].gold += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                break;
        }
    }

    let citiesSurvived = Object.entries(cities);

    if (citiesSurvived.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

    } else {
        console.log(`Ahoy, Captain! There are ${citiesSurvived.length} wealthy settlements to go to:`);
        citiesSurvived.forEach(([cityName, stats]) => console.log(`${cityName} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
    }
}

pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);

// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);


