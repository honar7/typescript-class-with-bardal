
// let arr = [1, 2, 3, 4];
// const strToArr = (str: string) => str.split(',');
// const strArrToNums = (arr: string[]) => arr.map(x => +x);
// const sumArr = (arr: number[]) => arr.reduce((i, c) => i + c);
// const strUtil1 = compose(sumArr, strArrToNums, strToArr);
// const strUtil2 = pipe(strToArr, strArrToNums, sumArr);
// console.log(strUtil1('1,2,3,4'));
// console.log(strUtil2('1,2,3,4'));

import { fnPipe } from "./utility/helper";
import { ShoppingCart, ShoppingCartDetail } from "./utility/shopping-cart";


console.log('first practise word counter');
// simple Word counter with pipe
const delimiter = ' ';
const strToWordArray = (str: string) => str.split(delimiter);
const sizeChecker = (arr: string[]) => arr.length;
const strWordCount = fnPipe(strToWordArray, sizeChecker);
// result
console.log('The Word count is : ' + strWordCount('Hello World With Typescript and Practise Of pipe and Compose and some staff for check'));

console.log('**********************************');

console.log('second practise simulate shopping cart  ');
let cart: ShoppingCart = {
  items: []
}

cart.items.push({ productId: 1, categoryId: 1, fee: 1000, count: 20 });
cart.items.push({ productId: 2, categoryId: 1, fee: 5000, count: 5 });
cart.items.push({ productId: 7, categoryId: 1, fee: 2000, count: 2 });
cart.items.push({ productId: 3, categoryId: 2, fee: 1000, count: 3 });
cart.items.push({ productId: 4, categoryId: 2, fee: 5000, count: 1 });
cart.items.push({ productId: 1, categoryId: 2, fee: 2500, count: 1 });
const whichCategoryId: number = 2;
const whichProduct: number = 1;
const filterCategory = (categoryId: number) => cart.items.filter(i => i.categoryId === categoryId);
const filterProduct = (productId: number) => cart.items.filter(i => i.productId === productId);
const calculateItemsPrice = (items: ShoppingCartDetail[]) => items.reduce((p, c) => p + (c.count * c.fee), 0);
const calculateCartTotalPricePerCategory = fnPipe(filterCategory, calculateItemsPrice);
const totalPaymentPerProduct = fnPipe(filterProduct, calculateItemsPrice);

console.log('The Sum Of Payment for categoryId ' + whichCategoryId + ' =>' + calculateCartTotalPricePerCategory(whichCategoryId));
console.log('The Sum Of Payment for productId ' + whichProduct  + '=>'+ totalPaymentPerProduct(whichProduct));
console.log('**********************************');
console.log('end of practise');
