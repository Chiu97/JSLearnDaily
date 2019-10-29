/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let map = new Map();
  for(let i=0; i<26; i++) {
    map.set(order.charAt(i),i);
  }  
  for(let i=1; i<words.length; i++) {
    if(!compare(words[i-1],words[i])) {
      return false;
    }
  }
  return true;  

  function compare(word1, word2) {
    if(word1.length > word2.length && word1.slice(0,word2.length)===word2) {
      return false;
    }
    if(word2.length >= word1.length && word2.slice(0,word1.length)===word1) {
      return true;
    }  
    const len = Math.min(word1.length, word2.length);  
    for(let i=0; i<len; i++) {
      const char1 = word1.charAt(i);
      const char2 = word2.charAt(i);
      if(map.get(char1) < map.get(char2)) {
        return true;
      } else if(map.get(char1) > map.get(char2)) {
        return false;
      }
    }  
    return false;
  }
};  

const words = ["iekm","tpnhnbe"];
const dict = "loxbzapnmstkhijfcuqdewyvrg";  
const res = isAlienSorted(words, dict);  
console.log(res);