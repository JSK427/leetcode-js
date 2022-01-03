/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

// * 思路：队列先进先出，栈后进先出
// *       利用栈和队列的特性，为两个栈不同分工，一个为入队栈，一个为出队栈，各自负责入队和出队。

// *        入队操作，直接压入入队栈即可，出队操作需要优先检查出队栈是否有数据，若无，需要从入队栈倒入后再操作。

var CQueue = function() {
    this.stackA = [];
    this.stackB = [];
};

CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value);
};

CQueue.prototype.deleteHead = function() {
    if (this.stackB.length) {
        return this.stackB.pop();
    } else {
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        if (!this.stackB.length) {
            return -1;
        } else {
            return this.stackB.pop();
        }
    }
};