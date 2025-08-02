/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray,result=[];
    joinedArray=[...arr1,...arr2];
                console.log("item",joinedArray)
    joinedArray.forEach(item=>{
        if(Array.isArray(result)&&result.length&&result.find((obj)=>obj.id===item.id)){
            const index = result.findIndex((obj)=>obj.id===item.id);
                console.log("item[index]",result[index])
                console.log("item",item)
            Object.entries(result[index]).forEach(([key,value])=>{
                console.log("keu:value",key,value)
                console.log("result.key",result[index][key])
                if(!item[key])item[key]=result[index][key]
                
                //  item.key=value
            })
            result[index]=item;
        }else{
            result.push(item)          
        }
    })
    return result
};
arr1 =
[{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
arr2 =
[{"id":2,"o":48,"z":84,"y":61}]
console.log(join(arr1,arr2))