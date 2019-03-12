function twoEqual (x, y) {
    return console.log( x == y );
}

twoEqual(null, undefined);       // true
twoEqual(undefined, null);       // true

twoEqual(20, '20');              // true
twoEqual(20, '11');              // false
twoEqual(20, '2n0');             // false

twoEqual(true, 1);               // true
twoEqual(true, 10);              // false
twoEqual(false, 0);              // true
twoEqual(false, +0);             // true
twoEqual(false, -0);             // true
twoEqual(false, 10);             // false

console.log('-====================');
twoEqual(null, 0);               // false
twoEqual(null, +0);              // false
twoEqual(null, -0);              // false

console.log('====================');
twoEqual(undefined, NaN);

console.log('====================');
var myObj = {'color': '11'};
var v1 = myObj;
var v2 = myObj;
// twoEqual(11, myObj.color);
twoEqual(v1, v2);



