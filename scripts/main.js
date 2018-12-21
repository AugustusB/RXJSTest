console.log(`%c${JSON.stringify([1,2,3].map(function(x) { return x + 1; }))}`, 'color:blue');

console.log(`%c${JSON.stringify([1,2,3].filter(function(x) { return x > 2}))}`, 'color:red');

console.log(_myRx.syntaxTesting.filterAndMap());
console.log( _myRx.syntaxTesting.queryTree());

console.log(`%c${JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll())}`, 'color:green');

console.log(`%c${_myRx.syntaxTesting.concatAllFlatten()}`, 'color:pink');
var str = _myRx.syntaxTesting.getAll();
str.forEach(element => console.log(element));

console.log(`%c${_myRx.syntaxTesting.useConcatmap().forEach(el => console.log(el))}`, 'color:pink');
console.log(`%c${_myRx.syntaxTesting.getLargest().url}`, 'color:pink');

console.log([1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10));
console.log(_myRx.syntaxTesting.getLargest2());
console.log(_myRx.syntaxTesting.getLargestBoxart());

console.log(_myRx.syntaxTesting.reduseWithIntialVal());
console.log(_myRx.syntaxTesting.fullRetrieve());
