const list = [4, 8, 2, 6];

const sortedList = list.slice().sort((n, m) => n < m ? -1 : 1);
console.log(sortedList, list);

const reverseList = [...list].reverse();
console.log(reverseList, list);
