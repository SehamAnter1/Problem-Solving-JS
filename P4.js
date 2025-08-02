/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray,result=[];
    joinedArray=[...arr1,...arr2];
                console.log("item",joinedArray)
//  res: { id: 1, x: 5, y: 10 },{ id: 1, x: 0, z: 3 },
//  res:  { id: 2, x: 7 }, 
//  res:{ id: 3, x: 9 }

                joinedArray.forEach(item=>{
        if(Array.isArray(result)&&result.length&&result.find((obj)=>obj.id===item.id)){
            const index = result.findIndex((obj)=>obj.id===item.id);
                console.log("item[index]",result[index])
                console.log("item",item)
            Object.entries(result[index]).forEach(([key,value])=>{
                console.log("keu:value",key,value)
                console.log("result.key",result[index][key])
                if(!(key in item)){
                    console.log("item key not found",key)
                    item[key]=result[index][key]
                }
                
                //  item.key=value
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