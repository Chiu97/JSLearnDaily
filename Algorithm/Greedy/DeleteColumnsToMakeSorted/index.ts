export {};

let minDeletionSize = function(A:Array<String>): number {  
  if(A.length <= 1) {
    return 0;
  }
  let i = 0;
  while(i<A[0].length) {
    if(helper(A,i)) {
      return i;
    }
    i++;
  }
  function helper(A:String[],i:number):boolean {
    for(let j=0; j<A.length-1; j++) {
      if(A[j][i]>A[j+1][i]) {
        return false;
      }
    }
    return true;
  }
  return i;
};  

const test = ["ca","bb","ac"];  

console.log(minDeletionSize(test));