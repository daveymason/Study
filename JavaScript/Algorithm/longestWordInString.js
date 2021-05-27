function findLongestWord(str) {
    return Math.max(...str.split(" ").map(word =>word.length));
}

findLongestWord("There is some stuff inside this function");