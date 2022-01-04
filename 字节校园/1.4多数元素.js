/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element/
 */
//方法一：排序
// * 思路：   将数组进行排序，如果数字出现的频率大于n/2,那么nums.length/2的位置就是这个数

// *  时间复杂度O(nlogn)，快排的时间复杂度

// *  空间复杂度O(logn),排序需要

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums.[Math.floor(nums.length / 2)];
}
console.log(majorityElement([2, 2, 3]));