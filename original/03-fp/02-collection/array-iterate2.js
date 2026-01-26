const arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce((n, m) => n + m),
  arr.sort((n, m) => n > m ? -1 : 1),
);
