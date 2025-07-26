// Create a function called getZigzag(data) that:

// Accepts an array called data.

// Groups the items into sub-arrays (rows) with alternating lengths:

// First row: 3 items

// Second row: 2 items

// Third row: 3 items

// Fourth row: 2 items

// and so on...

// If there aren’t enough items left at the end, include the remaining items in the last row.

// Returns a new array containing all the grouped rows.

function getZigzag(data) {
  const result = [];
  let index =0
  for (let i = 0; i < data?.length; i++) {
    let w = index  % 2 ? 2 : 3;
    let j = i;
    let row = [];
    while (w && w--) {
      console.log("j", j);
      console.log("data", data[j]);
      row.push(data[j]);
      if (j < data.length - 1) j++;
      else break;
      if (!w) break;
    }
    i += w ;
    index++;
    result.push(row);
  }
  return result;
}
const data =["A", "B", "C", "D", "E", "F", "G","H"];
console.log("getZigzag", getZigzag(data));
