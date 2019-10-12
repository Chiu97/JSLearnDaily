let beginword = "hit"
let endword = "cog"
let wordlist = ["hot","dot","dog","lot","log","cog"]
var findMin = 0;
var myLadderLength = function(beginWord, endWord, wordList, step) {
  // console.log('step: ' + step + ' ,beginWord: ' + beginWord + ', wordList: ' + wordList);
  for(let i=0; i<beginWord.length; i++) {
    let common = beginWord.slice(0,i) + beginWord.slice(i+1,beginWord.length+1);
    for(let j=0; j<wordList.length; j++) {
      item = wordList[j];
      if(item.slice(0,i) + item.slice(i+1,item.length+1) === common) {
        step++;
        if(item === endWord) {
          if (step<findMin||findMin===0) {
            findMin = step;
            break;
          } 
        } else {
          myLadderLength(item, endWord, [].concat(wordList.slice(0,j),wordList.slice(j+1,wordList.length+1)), step);
        }
      }
    }
  }
};

myLadderLength(beginword, endword, wordlist, 1);
// myLadderLength('dot', 'cog', ['dog','lot','cog'],1);

console.log('res:' + findMin);