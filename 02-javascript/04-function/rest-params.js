const showNames = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

showNames('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus');
