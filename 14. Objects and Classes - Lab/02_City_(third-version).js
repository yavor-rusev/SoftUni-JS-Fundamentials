function city(obj) {
    for (let entry of Object.entries(obj)) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});