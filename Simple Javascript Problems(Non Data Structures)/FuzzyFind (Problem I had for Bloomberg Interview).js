// Task Description
// Objective
// Define a method fuzzyFind that takes a search term string S and a list of filename strings F to search through.
// The method search return another list R that is the results of Fuzzy Searching through F with S. The returned list 
// R contains the filename strings from F that Fuzzy Matched with S.
// To Fuzzy Search through a single string T the characters in S should be present in T in the same order but, with
// any other characters in between.Define

// Examples:

// S = "ac"
// F = ['alpha/core']
// fuzzyfind(s, f) # => ['alpha/core']

// S = "acx"
// F = ['alpha/core']
// fuzzyfind(s, f) # => []

// S = "acp"
// F = ['alpha/core']
// fuzzyfind(s, f) # => []


const s1 = "cbazer";
const s2 = "ace";
const s3 = "123";
const f = [
  "fff/eee",
  "ace",
  "alpha/core",
  "ac1",
  "asdfc",
  "cbazer",
  "asdcbfdebfrdaewrzdfgr",
  "asdcbfdebfrdaewrzdfegr",
  "145684580682504876408576403",
  "aaodsufhoasudhfoaudhsfouadoau123",
  "123043585708237081702123102841023710823123123",
  "321321321321321321321321321",
];
const FuzzyFind = (s, f) => {
  let sp = 0;
  const arr = [];
  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < f[i].length; j++) {
      if (f[i][j] == s[sp]) {
        sp++;
      }
    }
    if (sp > s.length - 1) {
      arr.push(f[i]);
    }
    sp = 0;
  }
  return arr;
};
console.log(FuzzyFind(s1, f));
console.log(FuzzyFind(s2, f));
console.log(FuzzyFind(s3, f));