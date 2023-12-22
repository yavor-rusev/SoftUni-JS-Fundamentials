function flightSchedule([sectorAllFlights, flightsToChangeStatus, flightStatusArray]) {
    let allFlightsObj = {};
    let flightStatusToCheck = flightStatusArray[0];

    for (let stringLine of sectorAllFlights) {
        let flightInfo = stringLine.split(" ");
        let flightName = flightInfo.shift();
        let flightDestination = flightInfo.join(" ");

        allFlightsObj[flightName] = {};
        allFlightsObj[`${flightName}`]["Destination"] = flightDestination;
    }

    for (let stringLine of flightsToChangeStatus) {
        let searchedFlightInfo = stringLine.split(" ");
        let searchedFlightName = searchedFlightInfo[0];
        let newStatus = searchedFlightInfo[1];

        if (allFlightsObj.hasOwnProperty(`${searchedFlightName}`)) {
            allFlightsObj[`${searchedFlightName}`]["Status"] = newStatus;

        }
    }

    for (let currentFlightValue of Object.values(allFlightsObj)) {

        if (flightStatusToCheck === 'Cancelled') {
            if (currentFlightValue.hasOwnProperty("Status")) {
                console.log(currentFlightValue);
            }

        } else if (flightStatusToCheck === 'Ready to fly') {

            if (!currentFlightValue.hasOwnProperty("Status")) {
                currentFlightValue["Status"] = flightStatusToCheck;
                console.log(currentFlightValue);
            }
        }
    }
}

flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],

    ['Cancelled']
]
);