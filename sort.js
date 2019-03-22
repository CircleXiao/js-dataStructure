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

    /**
     * 快速排序：性能通常比其他的复杂度为O(nlogn)的排序算法好
     * 算法思想：从数组中间选择一项为主元，创建两个指针，左边指向数组第一项，右边指向数组最后一个项。
     *          移动左指针直到找到一个比主元大的元素，接着移动右指针，直到找到一个比主元小的元素，然后交换他们
     *          重复此过程，直至左指针超过右指针；接着，算法对划分后的小数组重复之前步骤，直至数组已完全排序
     */
    this.quickSort = function () {
        quick(array, 0, array.length-1);
    };

    var quick = function (array, left, right) {
        var index;

        if (array.length > 1) {
            index = partition(array, left, right);

            if (left < index-1) {
                quick(array, left, index-1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    var partition = function (array, left, right) {

        var pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }

            if ( i<= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
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
// array.selectionSort();
array.quickSort();

console.log(array.toString());


