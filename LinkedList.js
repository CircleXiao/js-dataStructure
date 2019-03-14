/**
 * 基于函数的类实现链表
 */
function LinkedList () {

    let Node = function (elem) { // Node辅助类：表示要加入的列表项
        this.elem = elem;
        this.next = null;
    };

    let length = 0; // 添加的列表项的数量
    let head = null; // 存储第一个结点的引用

    // 向链表尾部追加元素
    this.append = function (elem) { 
        let node = new Node(elem),
        current;

        if (head === null) { // 列表为空，添加的是第一个元素
            head = node;
        } else {
            current = head;

            // 循环列表，直到找出最后一项
            while (current.next) {
                current = current.next;
            }

            // 找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }

        length++; //更新链表长度
    };

    // 从链表中移除元素：从指定位置移除一个元素
    this.removeAt = function (position) {

        // 检查position是否越界
        if( position >-1 && position < length) {
            let current = head,
            previous,
            index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // 将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next;
            }

            length--;

            return current.elem;
        } else {
            return null;
        }
    };

    // 在任意位置插入元素
    this.insert = function (position,  elem) {

        // 检查越界
        if (position >= 0 && position <= length) {
            let node = new Node(elem),
            current = head,
            previous,
            index = 0;

            if (position === 0) { // 在第一个位置添加
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    // 输出链表中元素的值
    this.toString = function () {

        let current = head,
        string = '';

        while (current) {
            string += current.elem + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    // 返回元素在链表中的索引，如果元素不存在，返回-1
    this.indexOf = function (elem) {
        let current = head,
        index = 0;

        while (current) {
            if (elem === current.elem) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    // 根据元素的值移除一项
    this.remove = function (elem) {
        let index = this.indexOf(elem);
        return this.removeAt(index);
    };

    // 判断链表是否为空
    this.isEmpty = function () {
        return length === 0;
    };

    // 返回链表中元素个数
    this.size = function () {
        return length;
    };

    // 获取链表中第一个元素
    this.getHead = function () {
        return head;
    };
}

let link = new LinkedList();
console.log(link.isEmpty());

link.append(15);
link.append(10);
console.log(link.toString());
console.log(link.size());

link.insert(0, 22);
console.log(link.getHead());
console.log(link.toString());

link.insert(3, 19);
console.log(link.toString());

link.removeAt(0);
console.log(link.toString());

link.remove(10);
console.log(link.toString());

console.log(link.indexOf(15));
console.log(link.indexOf(10));



