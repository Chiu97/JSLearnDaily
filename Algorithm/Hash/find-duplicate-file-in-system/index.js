/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let map = new Map();
    let res = [];

    paths.forEach(path => {
        let dir = path.split(' ');
        const root = dir[0];
        const files = dir.slice(1);

        files.forEach(file => {
            const content = file.match(/\([^()]+\)/)[0];
            const filePath = root + '/' + file.replace(/\([^()]+\)/,'');
            if(map.has(content)) {
                let pathArr = map.get(content);
                let newPathArr = pathArr.concat(filePath);
                map.set(content, newPathArr);
            } else {
                let pathArr = [filePath];
                map.set(content, pathArr);
            }
        });
    });

    let contentArray = [...map.values()];
    contentArray.forEach(item => {
        if(item.length<2) return;
        res.push(item);
    });

    return res;
};

const paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];
const res = findDuplicate(paths);
console.log(res);