// Problem 1: Group by Property
// Prompt:
// Write a function that takes an array of objects and returns an object grouping them by a given key.
// const input = [
//   { name: 'Alice', role: 'dev' },
//   { name: 'Bob', role: 'designer' },
//   { name: 'Charlie', role: 'dev' }
// ];

// groupBy(input, 'role');
// // Expected output:
// // {
// //   dev: [
// //     { name: 'Alice', role: 'dev' },
// //     { name: 'Charlie', role: 'dev' }
// //   ],
// //   designer: [
// //     { name: 'Bob', role: 'designer' }
// //   ]
// // }
//******* sol : *******//
const input = [
  { name: 'Alice', role: 'dev' },
  { name: 'Bob', role: 'designer' },
  { name: 'Charlie', role: 'dev' }
];
function groupBy(array,key){
  return array.reduce((result,currentItem)=>{
    const groupItem=currentItem[key];
    if(!result[groupItem]){
      result[groupItem]=[]
    }
     result[groupItem].push(currentItem)
    return result
  },{})

}
let groupedData = groupBy(input, 'role');

console.log(groupedData)