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

    /**
     * 冒泡排序：所以排序算法中最简单，但性能最差
     * 算法思想：比较任意两个相邻的项，如果第一个比第二个大，则交换它们。向上移动至正确的顺序
     * 时间复杂度：O(n²)
     */
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

    /**
     * 选择排序
     * 算法思想：找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并放在第二位，以此类推
     * 时间复杂度：O(n²)
    */
    this.selectionSort = function () {
        var length = array.length,
        indexMin;
        for (var i=0; i<length-1; i++) {
            indexMin = i;
            for (var j=i; j<length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin);
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

// array.bubbleSort();
// array.modifiedBullbleSort();
array.selectionSort();

console.log(array.toString());


