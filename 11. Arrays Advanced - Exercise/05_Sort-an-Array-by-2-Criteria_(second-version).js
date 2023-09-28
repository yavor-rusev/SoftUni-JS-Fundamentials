function sortAnArrayBy2Criteria(arr) {   
    let lengthAndAlphabeticalSorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));   
    console.log(lengthAndAlphabeticalSorted.join("\n"));
       
}

sortAnArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma']
);