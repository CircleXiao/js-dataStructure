function testTrue (val) {
    return val ? console.log('is true') : console.log('is false');
}

var name = null;
var age;

testTrue(age);     // is false
testTrue(name);    // is true

testTrue(true);    // is true
testTrue(false);   // is false

testTrue(0);       // is false
testTrue(+0);      // is false
testTrue(-0);      // is false
testTrue(NaN);     // is false

testTrue("hello");   // is true
testTrue('');        // is false
testTrue(new Boolean(false)); // is true

var obj = {height: '100'};
testTrue(obj);            // is true
testTrue(obj.height);     // is true
testTrue(obj.width);      // is false
