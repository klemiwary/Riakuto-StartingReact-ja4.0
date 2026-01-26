const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1, 'd', 'e'];
const arr3 = ['Y', 'Z', ...arr2];
console.log(arr2);
console.log(arr3);

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { ...obj1, d: 99, e: 5 };
console.log(obj2);
