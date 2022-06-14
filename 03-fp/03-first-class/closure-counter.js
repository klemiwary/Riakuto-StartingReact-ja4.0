const counter = () => {
  let count = 0;

  const countUp = () => {
    return count += 1;
  };

  return countUp;
};
