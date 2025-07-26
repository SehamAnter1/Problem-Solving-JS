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
  for (let i = 0; i < data?.length; i++) {
    let count = i % 2 ? 2 : 3;
    let w = count;
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
    console.log("count before", count);
    i += count - 1;
    console.log("count after", count);
    console.log("result", result);
    result.push(row);
  }
  return result;
}
const data =["A", "B", "C", "D", "E", "F", "G","H"];
console.log("getZigzag", getZigzag(data));
