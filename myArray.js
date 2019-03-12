var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 22, 55];

// 反转数组
// result:[55, 22, 12, 11, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers.reverse());

// 数组排序：方法一
console.log(numbers.sort(function (a, b) {
    return a-b;
  }));

console.log("=====================");

// 数组排序：方法二
function compare (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
console.log(numbers.sort(compare));

console.log('=============自定义排序=============');

var friends = [
    {name: 'John', age: 22},
    {name: 'Ana', age: 32},
    {name: 'Jue', age: 12}
];

function comparePerson (a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));