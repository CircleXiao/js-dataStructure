/**
 * 创建队列：使用函数创建Queue类
 */

function Queue () {
    let items = [];

    this.enqueue = function (elem) { // 入队
        items.push(elem);
    };

    this.dequeue = function () { // 出队
        return items.shift();
    };

    this.front = function () { // 查看队头元素
        return items[0];
    };

    this.isEmpty = function () { // 检查队列是否为空
        return items.length == 0;
    };

    this.size = function () { // 队列的长度
        return items.length;
    };

    this.print = function () { // 打印队列元素
        console.log(items.toString());
    };
}

/**
 * 使用队列Queue类
 */

let queue = new Queue(); // 实例化
console.log(queue.isEmpty());     // 输出true

queue.enqueue('html');
queue.enqueue('css');
queue.enqueue('JavaScript');

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
console.log(queue.isEmpty());

console.log('============================================');

/**
 * 使用ECMAScript 6 语法实现Queue类
 */

let Queue2 = (function () {

    const items2 = new WeakMap();

    class Queue2 {
        constructor () {
            items2.set(this, []);
        }

        enqueue2 (element) {
            let q = items2.get(this);
            q.push(element);
        }

        dequeue2 () {
            let q = items2.get(this);
            let r = q.shift();
            return r;
        }

        front2 () {
            let q = items2.get(this);
            let r = q[0];
            return r;
        }

        isEmpty2 () {
            let q = items2.get(this);
            let r = q.length == 0 ? true : false;
            return r;
        }

        size2 () {
            let q = items2.get(this);
            let r = q.length;
            return r;
        }

        print2 () {
            let q = items2.get(this);
            let r = q.toString();
            console.log(r);
        }
    }

    return  Queue2;
})();

let queue2 = new Queue2();
console.log(queue2.isEmpty2());

queue2.enqueue2('bootstrap');
queue2.enqueue2('vue');
queue.enqueue('jQuery');

queue2.print2();
console.log(queue2.size2());
queue2.dequeue2();
queue2.print2();

queue2.dequeue2();
console.log(queue2.isEmpty2());
console.log(queue2.size2());

