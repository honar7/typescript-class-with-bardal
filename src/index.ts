
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
const delimiter = ' ';
const strToWordArray = (str: string) => str.split(delimiter);
const sizeChecker = (arr: string[]) => arr.length;
const strWordCount = fnPipe(strToWordArray, sizeChecker);

console.log('The Word count is: ');
console.log(strWordCount('Hello World With Typescript and Practise Of pipe and Compose'));

let cart: ShoppingCart = {
  items: []
}

cart.items.push({ productId: 1, categoryId: 1, fee: 12000, count: 20 });
cart.items.push({ productId: 2, categoryId: 1, fee: 5000, count: 5 });
cart.items.push({ productId: 3, categoryId: 2, fee: 1000, count: 3 });
cart.items.push({ productId: 4, categoryId: 2, fee: 108500, count: 1 });

const filterCategory = (categoryId: number) => cart.items.filter(i => i.categoryId === categoryId);
const calculateItemsPrice = (items: ShoppingCartDetail[]) => items.reduce((p, c) => p + (c.count * c.fee), 0);
const calculateCartTotalPrice = fnPipe(filterCategory, calculateItemsPrice);

console.log(calculateCartTotalPrice(1));

//Shopping Cart sample: takes two arguments: shopping cart and categoryId
// ????


console.log('end');
