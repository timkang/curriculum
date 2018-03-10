/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a)=>{
  const nums = {};
  let ret = {};
  for(let i=0; i<a.length; i++) {
    if(a[i] in nums && !(a[i] in ret)) {
      ret[a[i]] = a[i];
    }
    nums[a[i]] = a[i];
  }
  return Object.values(ret);
}

module.exports = {
  solution
}
