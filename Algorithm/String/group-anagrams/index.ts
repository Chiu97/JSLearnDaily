function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return []
    if (strs.length === 1) return [strs]

    const map = new Map<string, string[]>()

    function format (str: string) {
        return str.split('').sort().join('')
    }

    strs.forEach(str => {
        const formattedStr = format(str)
        const preVal = map.get(formattedStr) || []
        const newVal = [...preVal, str]
        map.set(formattedStr, newVal)
    })

    const res: string[][] = []
    map.forEach((val) => {
        res.push(val)
    })

    return res
};

const testCase = ["eat", "tea", "tan", "ate", "nat", "bat"];
const testOutput = groupAnagrams(testCase)
const expectedResult = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
console.log(testOutput)
// assert.deepEqual(testOutput, expectedResult)

export default groupAnagrams

