
/**
 * A function that displays n lines of the same pattern defined by the parameter function pattern()
 */
const repeat = (n, pattern) => {
  for(let i = 0; i < n; i++) {
    pattern();
  }
} 

const oneStar = () => { return "* \n";};
const fiveIntervals = () => { document.write("<p>* * * * *</p>");};


document.open();
setInterval(repeat, 1000, 1, fiveIntervals);