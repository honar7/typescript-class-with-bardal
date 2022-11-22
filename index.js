"use strict";
// let arr = [1, 2, 3, 4];
// const strToArr = (str: string) => str.split(',');
// const strArrToNums = (arr: string[]) => arr.map(x => +x);
// const sumArr = (arr: number[]) => arr.reduce((i, c) => i + c);
// const strUtil1 = compose(sumArr, strArrToNums, strToArr);
// const strUtil2 = pipe(strToArr, strArrToNums, sumArr);
// console.log(strUtil1('1,2,3,4'));
// console.log(strUtil2('1,2,3,4'));
exports.__esModule = true;
var helper_1 = require("./utility/helper");
console.log('first practise word counter');
// simple Word counter with pipe
var delimiter = ' ';
var strToWordArray = function (str) { return str.split(delimiter); };
var sizeChecker = function (arr) { return arr.length; };
var strWordCount = (0, helper_1.fnPipe)(strToWordArray, sizeChecker);
// result
console.log('The Word count is : ' + strWordCount('Hello World With Typescript and Practise Of pipe and Compose and some staff for check'));
console.log('**********************************');
console.log('second practise simulate shopping cart  ');
var cart = {
    items: []
};
cart.items.push({ productId: 1, categoryId: 1, fee: 1000, count: 20 });
cart.items.push({ productId: 2, categoryId: 1, fee: 5000, count: 5 });
cart.items.push({ productId: 7, categoryId: 1, fee: 2000, count: 2 });
cart.items.push({ productId: 3, categoryId: 2, fee: 1000, count: 3 });
cart.items.push({ productId: 4, categoryId: 2, fee: 5000, count: 1 });
cart.items.push({ productId: 1, categoryId: 2, fee: 2500, count: 1 });
var whichCategoryId = 2;
var whichProduct = 1;
var filterCategory = function (categoryId) { return cart.items.filter(function (i) { return i.categoryId === categoryId; }); };
var filterProduct = function (productId) { return cart.items.filter(function (i) { return i.productId === productId; }); };
var calculateItemsPrice = function (items) { return items.reduce(function (p, c) { return p + (c.count * c.fee); }, 0); };
var calculateCartTotalPricePerCategory = (0, helper_1.fnPipe)(filterCategory, calculateItemsPrice);
var totalPaymentPerProduct = (0, helper_1.fnPipe)(filterProduct, calculateItemsPrice);
console.log('The Sum Of Payment for categoryId ' + whichCategoryId + ' Is ' + calculateCartTotalPricePerCategory(whichCategoryId));
console.log('The Sum Of Payment for productId   => ' + whichProduct + totalPaymentPerProduct(whichProduct));
console.log('**********************************');
console.log('end of practise');
