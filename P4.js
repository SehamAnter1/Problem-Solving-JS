/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray,result=[];
    joinedArray=[...arr1,...arr2];
        joinedArray.forEach(item=>{
        if(Array.isArray(result)&&result.length&&result.find((obj)=>obj.id===item.id)){
            const index = result.findIndex((obj)=>obj.id===item.id);
            Object.entries(result[index]).forEach(([key,value])=>{
                if(!(key in item)){
                    item[key]=result[index][key]
                }                
            })  
            result[index]=item;
        }else{
            result.push(item)          
        }
    })
    return result.sort((a,b)=>a.id-b.id)
};
const arr1 = [
  { id: 1, x: 5, y: 10 },
  { id: 2, x: 7 }
];

const arr2 = [
  { id: 1, x: 0, z: 3 },  
  { id: 3, x: 9 }
];

console.log(join(arr1,arr2))
// problem url in leetcode 
// https://leetcode.com/problems/join-two-arrays-by-id/zzzzzzzzzzzzzzzzzzz