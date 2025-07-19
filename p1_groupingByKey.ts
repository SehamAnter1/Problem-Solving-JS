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
interface Person {
  name:string,
  role:string
}
const inputs: Person[] = [
  { name: 'Alice', role: 'dev' },
  { name: 'Bob', role: 'designer' },
  { name: 'Charlie', role: 'dev' }
];
// function groupBy<T extends Record<string,string>>(array:T[],key:keyof T):Record<string,T[]>{
function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result,currentItem)=>{
    const groupItem=currentItem[key] as string;
    if(!result[groupItem]){
      result[groupItem]=[]
    }
     result[groupItem].push(currentItem)
    return result
  },{} as Record<string,T[]>)

}
let groupedData = groupBy(inputs, 'role');

console.log(groupedData)

