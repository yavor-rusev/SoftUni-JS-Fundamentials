function requiredReading(bookPages, pagesPerHour, days) {
    let hoursPerDay = (bookPages / pagesPerHour) / days;

    console.log(hoursPerDay);

}

requiredReading(212, 20, 2);