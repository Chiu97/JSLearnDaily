function partition(s: string): string[][] {
    let res: string[][] = []
    if (!s) return res
    if (s.length===1) return [[s]]
    
    function isPalindrome (s: string, start: number, end: number) {
        var mid = start + Math.floor((end-start)/2)
        if (end-start===1) {
            return s[end] === s[start]
        }
        for (let i=start, j=end; i<=mid; i++,j--) {
            if (s[i]!==s[j]) return false
        }
        return true
    }

    function backtracking (preS: string[], rest: string) {
        if (!rest) res.push(preS)
        for (let i=0; i<rest.length; i++) {
            if (isPalindrome(rest, 0, i)) {
                if (rest.slice(0, i+1)==="bbab") {
                    console.log({
                        rest, i
                    })
                }
                backtracking([...preS, rest.slice(0, i+1)], rest.slice(i+1))
            }
        }
    }
    backtracking([], s)

    return res
};

const input = "abbab"
const output = partition(input)
console.log(output)

export {}