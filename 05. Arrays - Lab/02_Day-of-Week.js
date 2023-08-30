function dayOfWeek(dayNumber) {
    let dayName = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    let day = dayName[dayNumber - 1];

    if (day) {
        console.log(day);

    } else {
        console.log("Invalid day!");

    }
}

dayOfWeek(1);