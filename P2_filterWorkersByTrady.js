// Requirement : Filter Workers by a Specific Trade
// Input:
// {
//   "trade": "Plumber"
// }
// Workers List:
// [
//   { "email": "ali@example.com", "trades": ["Plumber", "Electrician"], "cost": 100 },
//   { "email": "sara@example.com", "trades": ["Carpenter"], "cost": 80 },
//   { "email": "john@example.com", "trades": ["Plumber"], "cost": 90 }
// ]
// Expected Output:
// ["ali@example.com", "john@example.com"]

function filterByTrade(workers,trade){ 
     
     const filtered= workers.filter((worker)=>worker.trades.includes(trade))
     return filtered

}
 
const workers=
[
  { "email": "ali@example.com", "trades": ["Plumber", "Electrician"], "cost": 100 },
  { "email": "sara@example.com", "trades": ["Carpenter"], "cost": 80 },
  { "email": "john@example.com", "trades": ["Plumber"], "cost": 90 }
]
const ans =filterByTrade(workers,'Plumber').sort().reverse()
console.log(ans)  