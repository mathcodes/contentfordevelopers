const findMaxBid = function (bids) {
  let maxBid = bids[0],
    minBid = bids[0];
  for (let i = 0; i < bids.length; i++) {
    for (let j = 0; j < bids.length; j++) {
      if (bids[i] > bids[j] && bids[i] > maxBid) {
        maxBid = bids[i];
      } else if (bids[i] < bids[j] && bids[i] < minBid) {
        minBid = bids[i];
      }
    }
  }
  return [minBid, maxBid];
}

const allBids = [2, 3, 5, 6, 1, 2, 4, 5];
console.log(findMaxBid(allBids));

// O(n^2) Time Complexity = nested for loops Quadratic Complexity BAD

// const findMaxBidQuicker = function (bids) {
//   let maxBid = bids[0]
//   for (let i = 0; i < bids.length; i++) {
//     if (bids[i] > maxBid) {
//       maxBid = bids[i]
//     }
//   }
//   return maxBid
// }

const findMaxBidQuicker = function (bids) {
  let maxBid = bids[0];
  console.log(`Find the Maxmium Value given an array of values.
  

  const findMaxBidQuicker = function (bids) {
    let maxBid = bids[0];
    for (let i = 0; i < bids.length; i++) {
      if (bids[i] >= maxBid) {
        maxBid = bids[i]
      }
    `)
  for (let i = 0; i < bids.length; i++) {
    console.log("\nITERATION", i,"\nWhere the value at bids[i] where i =",i,"is",bids[i]);
    if (bids[i] >= maxBid) {
      console.log("✅CHANGES BEING MADE(TRUTHY)\nSince this value is larger that the current maximum value (",maxBid,"), we make the adjustment and set maxBid to",i, "✅")
      maxBid = bids[i]
      console.log("maxBid after iteration #",i, ": ", maxBid)
    } else {
      console.log("🚫NO CHANGES BEING MADE(FALSY)\nThe max bid does not change since bids[",i,"] = ",bids[i]," < ", maxBid,". So we move on to the next iteration, as long as i < bids.length =",bids.length,"🚫")
    }
  }
  return maxBid
}

const allBidsQuicker = [2, 3, 5, -4, 4, 2, 4, 5];
console.log("findMaxBidQuicker: ", findMaxBidQuicker(allBidsQuicker));

// LINEAR TIME COMPLEXITY IS LINEAR
// SO DO SAME THING AFTER THE FIRST LOOP IS DONE
// SO TIME COMPLEXITY IS O(N) + O(N) = O(2N) = O(N)

const findMinBidQuicker = function (bids) {
  let minBid = bids[0];
  for (let i = 0; i < bids.length; i++) {
    if (bids[i] < minBid) {
      minBid = bids[i]
    }
  }return minBid
}
console.log(allBidsQuicker);
console.log(findMinBidQuicker(allBidsQuicker));