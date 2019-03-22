/**
 * 排序算法
 */

 // 创建一个数组表示待排序的数据结构
 function ArrayList ()  {

    var array = [];

    this.insert = function (item) {
        array.push(item);
    };

    this.toString = function () { 
        return array.join(); // 拼接数组中的所有元素至一个单一的字符串
    };

    var swap = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    // 冒泡排序：在所有排序算法中最简单，但运行时间上看最差O(n*n)
    this.bubbleSort = function () {
        var length = array.length;
        for (var i=0; i<length; i++) {
            for (var j=0; j<length-1; j++) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            }
        }
    };

    // 改进后的冒泡排序算法
    this.modifiedBullbleSort = function () {
        var length = array.length;
        for (var i=0; i<length; i++) {
            for (var j=0; j<length-1-i; j++) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            }
        }
    };


};

/**
 * 测试冒泡排序算法
 */
function createNonSortedArray (size) {
    var array = new ArrayList();
    for (var i=size; i>0; i--) {
        array.insert(i);
    }
    return array;
}

var array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());

var array2 = createNonSortedArray(6);
console.log(array2.toString());
array2.modifiedBullbleSort();
console.log(array2.toString());

