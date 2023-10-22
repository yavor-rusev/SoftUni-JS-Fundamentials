function towns(stringsArray) {
    for (let string of stringsArray) {
        let [townName, latitude, longitude] = string.split(" | ");

        let townInfo = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        console.log(townInfo);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);