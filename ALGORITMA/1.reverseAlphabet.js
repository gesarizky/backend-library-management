const reverseAlphabet = (str) => {
  const letters = str.slice(0, -1).split("").reverse().join("");
  const number = str.slice(-1);
  return letters + number;
};

console.log(reverseAlphabet("NEGIE1")); // Output: "EIGEN1"
