/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (let number =0; number<nums.length;number++) {
     if(nums.indexOf(target-nums[number])!==-1 && nums.indexOf(target-nums[number])!==number){
     return([number,nums.indexOf(target-nums[number])])
     }
   }
};  
//  [2,7,11,15]
//  [15,11,7,2]
// []
// url :https://leetcode.com/problems/two-sum/