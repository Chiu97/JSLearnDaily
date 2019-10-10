// 经典的爬楼梯问题

var climbStairs = function(n) {
  if(n === 1)
    return 1;
  if(n === 2)
    return 2;
  return climbStairs(n-1) + climbStairs(n-2); 
}