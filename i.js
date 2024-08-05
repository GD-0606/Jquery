var mergeAlternately = function (word1, word2) {
  let mergedStr = "",
    i = 0;
  while (i < word1.length || i < word2.length) {
    if (i < word1.length) {
      mergedStr = mergedStr + word1[i];
    }
    if (i < word2.length) {
      mergedStr = mergedStr + word2[i];
    }
    i++;
  }
  console.log(mergedStr);
};
mergeAlternately("ab", "pqrs");
var kidsWithCandies = function (candies, extraCandies) {
  let booleanArr = [],
    min,
    isGreatest;
  for (let index = 0; index < candies.length; index++) {
    min = candies[index] + extraCandies;
    isGreatest = true;
    for (let j = 0; j < candies.length; j++) {
      if (j === index) {
        continue;
      } else {
        if (candies[j] > min) {
          isGreatest = false;
          break;
        }
      }
    }
    booleanArr.push(isGreatest);
  }
  console.log(booleanArr);
};
kidsWithCandies([12, 1, 12], 10);


// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.
