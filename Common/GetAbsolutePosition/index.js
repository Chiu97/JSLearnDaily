// 获取元素的绝对位置

const getElementLeft = function(el) {
  let toLeft = el.offsetLeft;
  let current = el.offsetParent;
  
  while(current!==null) {
    toLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return toLeft;
}

const getElementTop = function(el) {
  let toTop = el.offsetTop;
  let current = el.offsetParent;

  while(curent!==null) {
    toTop += current.offsetTop;
    current = current.offsetParent;
  }

  return toTop;
}

module.exports.getPosition = {
  getElementLeft: getElementLeft,
  getElementTop: getElementTop
}