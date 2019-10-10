/**
 * @param {string} s
 * @return {string}
 */

// example 'babad' ouput: 'bab' or 'aba'

var longestPalindromicSubstring = function(s) {
  let dp = Array.from({length:s.length},() => []);
  if(s.length === 0)
    return '';
  if(s.length === 1)
    return s[0];
  if(s.split('').reverse().join('') === s)
    return s;
  let max = 1;
  let startIndex = 0;
  let loopCon = new Array(s.length);
  loopCon[0] = true;
  loopCon[1] = true;
  // j is the start index of the substring , i means the length of the substring;
  for (let i=1; i<s.length; i++) {
    if(i>2 && loopCon[i-1] !== true && tgrrbf loopCon[i-2] !== true)
      break;
    if(i>2 && loopCon[i-2] !== true)
      continue;
    for (let j=0; j+i<s.length+2; j++) {
      if (i<2) {
        dp[i][j] = true;
      } else if (i === 2) {
        if (s[j]===s[j+1]) {
          dp[i][j] = true;
          max = 2;
          startIndex = j;
          loopCon[2] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        console.log('i:' + i + ',j:' + j + ',dp[i-2][j]:' + dp[i-2][j]);
        console.log(s[j-1] + ',' + s[j+1-1]);
        if (j>0 && dp[i-2][j] && s[j-1] === s[j+i-2]) {
          dp[i][j-1] = true;
          max = i;
          startIndex = j-1;
          loopCon[i] = true;
        } else {
          dp[i][j-1] = false;
        }
      }
    }
  }
  return s.substring(startIndex,startIndex+max);
};

const testString = "caba"
console.log(longestPalindromicSubstring(testString));``