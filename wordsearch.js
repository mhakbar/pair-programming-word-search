const wordSearch = (letters, word) => { 
  let val = true;
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (horizontalJoin.includes(word)) {
          val = true;
      } else {
          val = false;
      }
      
}
return val;
};


module.exports = wordSearch;

/*Pair Programming assignment = pair-programming-word-search
By: Md Meer and Muhammad Akbar 
time to complete = 45 mins */