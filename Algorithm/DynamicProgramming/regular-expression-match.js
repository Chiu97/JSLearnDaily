/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/* 
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 */
var isMatch = function(s, p) {
  return new RegExp(`^${p}$`).test(s);
}