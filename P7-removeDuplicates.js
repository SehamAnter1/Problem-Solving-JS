/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ans=[],j=0;
    
    for(let i =0; i<nums.length-1; i++){
        if(nums[i]!==nums[i+1]){   
        nums[j]=nums[i];
        j++;
        }
    }
     nums[j] = nums[nums.length - 1];j++;   
    return j
};
// propble url :https://leetcode.com/problems/remove-duplicates-from-sorted-array/