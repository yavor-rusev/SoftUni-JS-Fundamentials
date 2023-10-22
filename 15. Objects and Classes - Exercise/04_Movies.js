function movies(arrayOfCommands) {
    let moviesInfoArray = [];

    for (let command of arrayOfCommands) {

        if (command.includes("addMovie ")) {
            let movieName = command.split("addMovie ")[1];

            if (!moviesInfoArray.includes({ movieName })) {
                moviesInfoArray.push({ name: movieName });
            }

        } else if (command.includes(" directedBy ")) {
            let [searchedMovieName, director] = command.split(" directedBy ");

            moviesInfoArray.forEach(cuurentMovieObj => {

                if (cuurentMovieObj.name === searchedMovieName) {
                    cuurentMovieObj.director = director;
                }

            })

        } else if (command.includes(" onDate ")) {
            let [searchedMovieName, date] = command.split(" onDate ");

            let searchedMovieObj = moviesInfoArray.find(currentMovieObj => currentMovieObj.name === searchedMovieName);

            if (searchedMovieObj) {
                searchedMovieObj.date = date;
            }
        }
    }

    for (let currentMovieObj of moviesInfoArray) {

        if (currentMovieObj.name && currentMovieObj.director && currentMovieObj.date) {
            let movieObjAsJSON = JSON.stringify(currentMovieObj);
            console.log(movieObjAsJSON);
        }
    }
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);