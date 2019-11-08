/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) { 

    const dfs = (current) => {
        if(!map.get(current)) return;
        const next = map.get(current);
        while(next.length) dfs(next.shift());
        res.push(current);
    }

    const getMap = () => {
        let map = new Map();
        tickets.forEach(ticket => {
            const from = ticket[0];
            const to = ticket[1];
            if(!map.has(from)) map.set(from, []);
            if(!map.has(to)) map.set(to, []);
            map.get(from).push(to);
        });
        for(let [key, value] of map) {
            value.sort( (a,b) => {
                if(a<b) return -1;
                if(a===b) return 0;
                return 1;
            })
        }
        return map;
    }

    let map = getMap();
    let res = [];
    dfs('JFK');
    return res.reverse();
};

const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets));

