/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a,b)=>{
  for(let x in a) {
    b(x, a[x]);
  }  
  return;
}
module.exports = {
  solution
}
