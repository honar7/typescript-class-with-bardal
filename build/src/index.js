"use strict";
// let arr = [1, 2, 3, 4];
// const strToArr = (str: string) => str.split(',');
// const strArrToNums = (arr: string[]) => arr.map(x => +x);
// const sumArr = (arr: number[]) => arr.reduce((i, c) => i + c);
// const strUtil1 = compose(sumArr, strArrToNums, strToArr);
// const strUtil2 = pipe(strToArr, strArrToNums, sumArr);
// console.log(strUtil1('1,2,3,4'));
// console.log(strUtil2('1,2,3,4'));
console.log('Start Of Practise ');
// simple Word counter with pipe
var delimiter = ' ';
var strToWordArray = function (str) { return str.split(delimiter); };
var sizeChecker = function (arr) { return arr.length; };
var strWordCount = fnPipe(strToWordArray, sizeChecker);
console.log('The Word count is: ');
console.log(strWordCount('Hello World With Typescript and Practise Of pipe and Compose'));
var cart = {
    items: []
};
cart.items.push({ productId: 1, categoryId: 1, fee: 12000, count: 20 });
cart.items.push({ productId: 2, categoryId: 1, fee: 5000, count: 5 });
cart.items.push({ productId: 3, categoryId: 2, fee: 1000, count: 3 });
cart.items.push({ productId: 4, categoryId: 2, fee: 108500, count: 1 });
var filterCategory = function (categoryId) { return cart.items.filter(function (i) { return i.categoryId === categoryId; }); };
var calculateItemsPrice = function (items) { return items.reduce(function (p, c) { return p + (c.count * c.fee); }, 0); };
var calculateCartTotalPrice = fnPipe(filterCategory, calculateItemsPrice);
console.log(calculateCartTotalPrice(1));
//Shopping Cart sample: takes two arguments: shopping cart and categoryId
// ????
console.log('end');
//# sourceMappingURL=index.js.map