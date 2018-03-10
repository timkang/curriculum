/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a,b)=>{
  const pairsadd = new Set();
  for(let i=0; i<a.length; i++) {
    let needed = b - a[i];
    if(pairsadd.has(needed)) return true;
    pairsadd.add(a[i]);
  }
  return false;
}

module.exports = {
  solution
}
