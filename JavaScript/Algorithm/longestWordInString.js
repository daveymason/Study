function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("Ad a few words here for the fuckint hings to work");