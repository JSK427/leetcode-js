/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

//利用栈的思路

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const bracket = { "(": ")" };
    const stack = [];
    let res = [];
    const result = [];
    for (let i = 0; i < S.length; i++) {
        const val = S[i];
        if (bracket[val]) {
            // 左括号
            stack.push(val);
        } else {
            // 右括号
            stack.pop();
        }
        if (stack.length === 0) {
            // 存在一组有效括号
            res.push(val);
            const cur = [...res];
            cur.shift();
            cur.pop();
            result.push(cur);
            res = [];
            continue;
        }
        res.push(val);
    }
    return result.flat().join("");
};

// 测试用例
let test = "(()())(())";

console.time("执行用时");
console.log(removeOuterParentheses(test));
console.timeEnd("执行用时");

//常规思路
/* 
通过计数器找到需要去除的外层括号，留下有效符号
*/

var removeOuterParentheses = function(s) {
    let count = 0,
        ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" && count++ > 0) {
            ans = ans + "(";
        }
        if (s[i] === ")" && count-- > 1) {
            ans = ans + ")";
        }
    }
    return ans;
};