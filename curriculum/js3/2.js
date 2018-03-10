/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr)=>{
  const hmm = {};
  let most = 0;
  let ret = 0;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] in hmm) {
      hmm[arr[i]] += 1;
    } else {
      hmm[arr[i]] = 1;
    }
    if(hmm[arr[i]] > most) {
      most = hmm[arr[i]];
      ret = arr[i];
    }
  }
  return ret;
}

module.exports = {
  solution
}
