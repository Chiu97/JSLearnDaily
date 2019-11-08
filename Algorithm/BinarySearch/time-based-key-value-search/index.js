class TimeMap {
    constructor() {
        this.keyValueMap = new Map();
    }

    set(key, value, timeStamp) {
        if(!this.keyValueMap.has(key)) {
            let map = new Map();
            map.set(value, timeStamp);
            this.keyValueMap.set(key, map);
            return;
        } else {
            this.keyValueMap.get(key).set(value, timeStamp);
            return;
        }
    }

    get(key, timeStamp) {
        const keyItemMap = this.keyValueMap.get(key);
        if(keyItemMap===undefined) return '';
        let retValue = '';
        let currentTimeStamp = -1;
        for(let [value, prevTimeStamp] of keyItemMap) {
            if(prevTimeStamp <= timeStamp && currentTimeStamp < prevTimeStamp) {
                retValue = value;
            }
        }

        return retValue;
    }
}