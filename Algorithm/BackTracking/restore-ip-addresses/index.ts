function restoreIpAddresses(s: string): string[] {
    let res: string[] = []

    function backtracking (pre: string, rest: string, sum: number): void {
        if (sum===4) {
            if (rest.length===0) res.push(pre.slice(0, -1))
            return
        }
        if (!rest) return
        if (rest[0]==='0') {
            return backtracking(pre+'0'+'.', rest.slice(1), sum+1)
        }

        backtracking(pre+rest[0]+'.', rest.slice(1), sum+1)
        if (rest.length>1)
            backtracking(pre+rest[0]+rest[1]+'.', rest.slice(2), sum+1)
        if (rest.length>2&&parseInt(rest.slice(0, 3))<=255)
            backtracking(pre+rest[0]+rest[1]+rest[2]+'.', rest.slice(3), sum+1)
    }

    backtracking('', s, 0)
    return res
};

const input = "101023"
const ouput = restoreIpAddresses(input)
console.log(ouput)

export {}