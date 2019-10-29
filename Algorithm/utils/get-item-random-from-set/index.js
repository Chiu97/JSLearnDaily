// 主要是怎么从JavaScript的set抽取一个随机item

export default function getRandomItem(set) {
    const size = set.size;
    if(this.size===0) {
        return false;
    }
    if(this.size===1) {
        return set.values().next().value;
    }
    // 注意下面如果set只有一个item的时候会出奇怪的问题,所以上面有对set.size===1的判断
    // 另外虽然使用Array.from不会出现这种问题,但是leetcode上刷题的时候感觉效率要慢一些.
    const arr = new Array(...set.values());
    const randomIndex = Math.floor(Math.random()*size);
    return arr[randomIndex];
}