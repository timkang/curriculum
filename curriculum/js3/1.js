/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj)=>{
  const keyz = Object.keys(obj);
  let ret = obj[keyz[0]];
  for(let i=1; i<keyz.length; i++) {
    if(obj[keyz[i]] > ret) ret = obj[keyz[i]];
  }
  return ret;
}

module.exports = {
  solution
}
