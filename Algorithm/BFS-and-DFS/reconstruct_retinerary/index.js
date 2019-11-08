/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    if(tickets.length===0) {
        return [];
    }
    if(tickets.length===1) {
        return tickets[0];
    }
    const totalStations = tickets.length;
    let head = null;
    let map = new Map();
    let res = [];
    let visitSet = new Set();

    tickets.forEach(ticket => {
        const from = ticket[0];
        const to = ticket[1];
        if(map.has(from)) {
            map.set(from, map.get(from).concat(to));
        } else {
            map.set(from, [to]);
        }
    });

    let firstStation = new Station('JFK');
    res.push('JFK');
    let firstStationList = map.get('JFK');
    firstStationList.forEach(stationName => {   
        firstStation.addNext(stationName);
    });
    res.push(firstStation.next().name);
    let currentStation = firstStation.next();
    visitSet.add('JFK' + ',' + currentStation.name);

    while(res.length<=tickets.length) {
        const nextStationList = map.get(currentStation.name);    
        nextStationList.forEach(stationName => {
            if(visitSet.has(stationName + ',' + currentStation.name)) return;
            currentStation.addNext(stationName);
        });
        res.push(currentStation.next().name);
        currentStation = currentStation.next();
    }

    return res;
};

class Station {
    constructor(name) {
        this.name = name;
        this._next = null;
    }

    addNext(stationName) {
        if(this._next===null) {
            this._next = new Station(stationName);
        } else {
            if(this._next.name>stationName) {
                this._next.name = stationName;
            }
        }
        return;
    }   

    next() {
        return this._next;
    }

}

const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets));