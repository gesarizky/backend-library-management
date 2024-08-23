const countOccurrences = (input, query) => {
  return query.map((q) => input.filter((word) => word === q).length);
};

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

console.log(countOccurrences(INPUT, QUERY)); // Output: [1, 0, 2]
