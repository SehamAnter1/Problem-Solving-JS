/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (let number =0; number<nums.length;number++) {
      for(let j=number+1;j<nums.length;j++){
       if(target===(nums[number]+nums[j])&&j!==number)
     return([number,j])
     }
   }
};  
//  [2,7,11,15]
//  [15,11,7,2]
// []