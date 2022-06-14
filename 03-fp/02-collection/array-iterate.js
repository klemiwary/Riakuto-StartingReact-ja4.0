const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.map((n) => n * 2),
  arr.filter((n) => n % 3 === 0),
  arr.find((n) => n > 4),
  arr.findIndex((n) => n > 4),
  arr.every((n) => n !== 0),
  arr.some((n) => n >= 10),
);
