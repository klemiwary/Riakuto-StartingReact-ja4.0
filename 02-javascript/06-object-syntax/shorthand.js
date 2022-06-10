const foo = 'dummy';
const bar = 'key';
const baz = 1024;

const obj1 = {
  foo: 4,
  'foo': 8,
  '<fuu>': 16,
  [bar]: 128,
  [`_${bar}2`]: 256,
  baz: baz / 2,
};
console.log(obj1);

const obj2 = { baz };
console.log(obj2);
