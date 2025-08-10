/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result=[],temp=arr,i=0;
    console.log(arr.length/size)
  while(arr.length>0){
      result[i]=arr.splice(0,size);
      i++;
      temp=arr;
  }  
  return result
};
// url https://leetcode.com/problems/chunk-array/description/