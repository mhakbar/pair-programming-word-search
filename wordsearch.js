const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (horizontalJoin.includes(word)){
          return true
        } else {
          return false;
        }
    }
}

module.exports = wordSearch

//Pair programming by Md Hefzul Bari & Muhammad Akbar