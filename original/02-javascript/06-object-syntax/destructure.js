const [a, b] = ['foo', 'bar'];
console.log(a, b);

const [, n] = [1, 4];
console.log(n);

const [, , i, , j, , , k] = [1, 2, 3, 4, 5, 6, 7];
console.log(i, j, k);

const profile = { name: 'Kanae', age: 24, gender: 'f' };
const { name, age } = profile;
console.log(name, age);
