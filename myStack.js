/**
 * 基于函数的Stack类
 */
function Stack() {
    let items = [];

    this.push = function (elem) { // 只添加元素到栈顶
        items.push(elem);
    };

    this.pop = function () { // 从栈移除元素
        return items.pop();
    };

    this.peek = function () { // 查看栈顶元素
        return items[items.length-1];
    };

    this.isEmpty = function () { // 检查栈是否为空
        return items.length == 0;
    };

    this.size = function () { // 返回栈的长度
        return items.length;
    };

    this.clear = function () { // 清空栈中的元素
        items = [];
    };

    this.print = function () { // 打印栈中的元素
        console.log(items.toString());
    };
}

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
stack.print();
console.log(stack.peek());
stack.pop();
console.log(stack.size());
console.log(stack.peek());

console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());

console.log('==================================================');

/**
 * 用栈实现进制转换：十进制转二进制
 */
function divideBy2 (decNumber) {
    var remStack = new Stack(),
    rem,
    binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(8));

console.log('====================十进制转任意进制=============================');
 /**
  * 进制转换：十进制转任意进制
  */
 function baseConverter (decNumber, base) {
    var remStack = new Stack(),
    rem,
    baseString = '',
    digtals = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digtals[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(15, 2));
console.log(baseConverter(15, 8));
console.log(baseConverter(15, 16));

