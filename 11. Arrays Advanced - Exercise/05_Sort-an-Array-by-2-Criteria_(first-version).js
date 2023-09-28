function sortAnArrayBy2Criteria(arr) {
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);        
    })

    sortedArray.forEach(a => console.log(a));
}

sortAnArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma']
);