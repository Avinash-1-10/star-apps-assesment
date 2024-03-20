function minPlanesToReachLastAirport(fuelUnits) {
  const N = fuelUnits.length; // Number of airports
  const arr = new Array(N).fill(Infinity); // store minimum planes needed to reach each airport
  arr[0] = 0; // Base case: It takes 0 planes to reach the first airport

  // Loop through each airport starting from the second one
  for (let i = 1; i < N; i++) {
    // Iterate through the previous airports
    for (let j = 0; j < i; j++) {
      // Check if it's possible to reach airport i from airport j
      if (j + fuelUnits[j] >= i) {
        // Update the minimum planes needed to reach airport i
        arr[i] = Math.min(arr[i], arr[j] + 1);
      }
    }
  }

  // If it's not possible to reach the last airport, return -1; otherwise, return the minimum planes needed to reach it
  return arr[N - 1] === Infinity ? -1 : arr[N - 1];
}

console.log(minPlanesToReachLastAirport([2, 1, 2, 3, 1]));
console.log(minPlanesToReachLastAirport([1, 6, 3, 4, 5, 0, 0, 0, 6]));
